import React, { useEffect, useState, useCallback } from 'react';
import produce from 'immer'

import List from '../List';
import Modal from '../Modal'

import { Container } from './styles';

import ListContext from '../../context/lists'

import debounce from '../../helpers/debounce';

function Board() {
  const [lists, setLists] = useState([])
  const [modalActive, setModalActive] = useState({state: false, listId: null})

  useEffect(() => {
    (async () => {
      const data = await fetch('/api/lists')
      const {lists: ll} = await data.json() || {list: []}
      setLists(ll)
    })()
  }, [])
  const update = useCallback(debounce(async (lists) => {
    await fetch('/api/lists', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: lists
    })
  }, 1175), [])
  function move(fromList, from, toList, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from]
      draft[fromList].cards.splice(from, 1)
      draft[toList].cards.splice(to, 0, dragged);      
      update(JSON.stringify(draft))
    }))
  }
  return (
    <Container>
      <ListContext.Provider value={{move, lists, setLists}}>
        {
          lists.map((i, k) => <List key={i.title} index={k} {...i} { ...(i.creatable ? { setModal: setModalActive } : {}) }  />)
        }
        <Modal setModal={setModalActive} modalActive={modalActive}/>
      </ListContext.Provider>
    </Container>
  );
}

export default Board
