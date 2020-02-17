import React, { useContext, useRef, useCallback } from 'react';

import { useDrop } from 'react-dnd'

import { MdAdd as AddIcon } from 'react-icons/md';

import Card from '../Card';

import listsCtx from '../../context/lists'

import { Container } from './styles';

import throttle from '../../helpers/throttle'

function List({ id, title, creatable, cards, done, index, setModal }) {
  const titleRef = useRef()
  const ctx = useContext(listsCtx);

  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop: throttle(function(item, monitor){
      const draggedListIndex = item.listIndex;
      const targetListIndex = index;
      
      const draggedIndex = item.index;
      const targetIndex = ctx.lists[index].cards.length;

      ctx.move(draggedListIndex, draggedIndex, targetListIndex, targetIndex)

      item.index = targetIndex;
      // item.listIndex = targetListIndex;
    }, 70)
  })
  
  const save = useCallback(async (title) => {
    await fetch('/api/lists/name', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title,
        id,
        creatable,
        cards,
        done
      })
    })
    // eslint-disable-next-line
  }, [])

  const h2Click = useCallback(() => {
    titleRef.current.contentEditable = true
    titleRef.current.focus()
    titleRef.current.onblur = () => {
      titleRef.current.contentEditable = false
      titleRef.current.onkeypress = undefined
      titleRef.current.onblur = undefined
      save(titleRef.current.textContent)
    }
    titleRef.current.onkeypress = (e) => {
      const { keyCode, which } = e
      if(keyCode === 13 || which === 13){
        e.preventDefault()
        titleRef.current.contentEditable = false
        titleRef.current.onkeypress = undefined
        titleRef.current.onblur = undefined
        save(titleRef.current.textContent)
      }
    }
    // eslint-disable-next-line
  }, [])
  return (
    <Container ref={dropRef} done={done}>
      <header>
        <h2 onClick={h2Click} ref={titleRef}>{title}</h2>
        { creatable &&
        <button onClick={() => setModal({state:true, listId: id})} type="button">
          <AddIcon size={24} color='#fff'/>
        </button>
        }
      </header>
      <div className="list">
        <ul>
          {
            cards.map((i, k) => <Card key={i.id} {...i} index={k} listIndex={index}/>)
          }
        </ul>
      </div>
    </Container>
  );
}

export default List
