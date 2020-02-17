import React, { useState, useCallback, useContext } from 'react';

import { Container, Label } from './styles';

import listsContext from '../../context/lists'

function Modal({ modalActive, setModal }) {
  const ctx = useContext(listsContext)
  const [inputs, setInputs] = useState({
    content: '',
    user: '',
    labels: []
  })
  const changeInput = useCallback((name, {target: { value }}) => {
    setInputs((i) => {
      let inp = {...i}
      if(name !== 'labels')
        inp[name] = value
      else
        inp[name].push(value)
      return inp
    })
  }, [])
  const handleAdd = useCallback(async () => {
    let data = await fetch('/api/lists', {
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({...inputs, listId: modalActive.listId})
    })
    data = await data.json()

    console.log(ctx.setLists(data))
    handleClose()
    // eslint-disable-next-line
  }, [inputs, modalActive])
  const handleClose = useCallback(() => {
    setModal({ state: false, listId: null })
    setInputs({
      content: '',
      user: '',
      labels: []
    })
    // eslint-disable-next-line
  }, [])
  return (
    <Container className={modalActive.state ? 'active': ''}>   
      <button className="closeBtn" onClick={handleClose}>X</button>  
      <div className="content">
        <h2>New Request</h2>
        <div className="inputGroup">
          <label>Description</label>
          <input onChange={changeInput.bind(null, 'content')} value={inputs.content} type="text"/>
        </div>
        <div className="inputGroup">
          <label>Avatar URL</label>
          <input onChange={changeInput.bind(null, 'user')} value={inputs.user} type="text"/>
        </div>
        <div className="inputGroup">
          <label>
            Labels: {
              inputs.labels.map((i, k) => <Label color={i} key={k}/>)
            }
          </label>
          <input onChange={changeInput.bind(null, 'labels')} type="color"/>
        </div>
      </div>
      <button onClick={handleAdd} className='add'>Add New</button>
    </Container>
  );
}

export default Modal;