import axios from 'axios'
import { setFlash } from './flash'

const ITEMS = 'ITEMS'
const ADD_ITEM = 'ADD_ITEM'

export const getItems = () => {
  return (dispatch) => {
    axios.get('/api/items')
      .then(res => {
        dispatch({ type: ITEMS, items: res.data })
      })
      .catch( (err) => dispatch(setFlash('Failed to retrieve items', 'red')) )
  }
}

// export const addItem = (item) => {
//   return ( dispatch ) => {
//     axios.post(`/api/items`, {item})
//     .then(res => {
//         dispatch({ type: ADD_ITEM, item: res.data })
//         dispatch(setFlash('Item created successfully', 'green'))
//       })
//       .catch( e => {
//         dispatch(setFlash(e.errors, 'red'))
//       })
//   }
// }

export default ( state=[], action ) => {
  switch(action.type){
    
    case ITEMS:
      return action.items
    default:
      return state
  }
}
