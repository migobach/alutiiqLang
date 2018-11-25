import axios from 'axios'
import { setFlash } from './flash'

const BOOKS = 'BOOKS'

export const getBooks = () => {
  return(dispatch) => {
    axios.get('/api/books')
    .then(res => {
      dispatch({ type: BOOKS, books: res.data })
    })
    .catch( (err) => dispatch(setFlash('Failed to retrieve books', 'red')) )
  }
}

export default ( state=[], action ) => {
  switch(action.type){
    case BOOKS: 
      return action.books
    default: 
      return state
  }
}
