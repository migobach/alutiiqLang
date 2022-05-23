import axios from 'axios'
import { setFlash  } from './flash'

const POSTBASES = 'POSTBASES'

export const getPostbases = () => {
  return(dispatch) => {
    axios.get('/api/postbases')
    .then(res => {
      dispatch({ type: POSTBASES, postbases: res.data })
    })
    .catch( (err) => dispatch(setFlash('Failed to retrieve postbases from the database', 'red')) )
  }
}

export default ( state=[], action) => {
  switch(action.type) {
    case POSTBASES:
      return action.postbases
    default:
      return state
  }
}