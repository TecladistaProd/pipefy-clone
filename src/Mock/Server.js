import { Server, Model } from 'miragejs';

import mock from './mock'

const listsMock = (() => {
  let lists = JSON.parse(localStorage.getItem('lists')) || []
  if(lists.length > 0){
    return lists
  }
  return mock
})()

export default (environment = 'development') => {
  return new Server({
    environment,
    models: {
      list: Model
    },
    fixtures: {
      lists: listsMock
    },
    routes() {
      this.namespace = 'api';
      this.timing = Math.max(250, Math.random() * 1050);
      this.resource('lists')
      this.put('lists/name', (schema, req) => {
        const list = JSON.parse(req.requestBody)
        const { id } = list;
        delete list.id
        schema.db.lists.update(id, { list })
        const lists = schema.db.dump().lists

        localStorage.setItem('lists', JSON.stringify(lists.map(i => i.id === id ? list : i)))
      })
      this.put('lists', (schema, req) => {
        const lists = JSON.parse(req.requestBody)
        lists.forEach(list => {
          let id =  list.id
          delete list.id
          schema.db.lists.update(id, { list })
        })

        localStorage.setItem('lists', JSON.stringify(lists))
        
        return []
      })
      this.post('lists', (schema, req) => {
        const body = JSON.parse(req.requestBody)

        const list = schema.db.lists.find(body.listId)
        let card = {}
        delete body.listId
        Object.keys(body).forEach(i => {
          if(!body[i]) return
          card[i] = body[i]
        })

        const lists = [...schema.db.lists]
        
        card.id = 0

        lists.forEach(i => {
          i.cards.forEach(i => {
            card.id = Math.max(card.id, i.id+1)    
          })
        })

        list.cards.push(card)
        schema.db.lists.update(list.id, list)

        localStorage.setItem('lists', JSON.stringify(lists.map(i => i.id === list.id ? list : i)))
        return lists
      })
    }
  })
}