import axios from 'axios'
import { setFlash } from './flash'

const MATERIALS = 'MATERIALS'
const BOOKS = 'BOOKS'

export const getMaterials = () => {
  return(dispatch) => {
    axios.get('/api/materials')
      .then(res => {
        dispatch({ type: MATERIALS, materials: res.data })
      })
      .catch( (err) => dispatch(setFlash('Failed to retrieve materials', 'red')) )
  }
}

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
    case MATERIALS:
      return action.materials
    case BOOKS: 
      return action.books
    default: 
      return state
  }
}