import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Container, Label } from './styles';

import throttle from '../../helpers/throttle'

import listsCtx from '../../context/lists'

function Card({ id, content, labels, user, index, listIndex }) { 
  const ref = useRef()
  const ctx = useContext(listsCtx)
  const [{ isDraggin }, dragRef] = useDrag({
    item: {
      type: 'CARD',
      index,
      listIndex
      // id,
      // content
    },
    collect: monitor => ({
      isDraggin: monitor.isDragging()
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover: throttle(function(item, monitor){
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;
      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex) return
      
      const targetSize = ref.current.getBoundingClientRect()
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if(draggedIndex < targetIndex && draggedTop < targetCenter) return

      if(draggedIndex > targetIndex && draggedTop > targetCenter) return

      ctx.move(draggedListIndex, draggedIndex, targetListIndex, targetIndex)
      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }, 70)
  })

  dragRef(dropRef(ref))

  return (
    <Container isDraggin={isDraggin} ref={ref}>
      <header>
        {labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>
        {content}
      </p>
      {/* <img src="https://api.adorable.io/avatars/250/fun.png" alt="avatar" /> */}
      {user && 
        <img src={user} alt="avatar" />
      }
    </Container>
  );
}

export default Card
