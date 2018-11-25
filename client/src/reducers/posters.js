import axios from 'axios'
import { setFlash } from './flash'

const POSTERS = 'POSTERS'

export const getPosters = () => {
  return(dispatch) => {
    axios.get('/api/posters')
    .then(res => {
      dispatch({ type: POSTERS, posters: res.data })
    })
    .catch( (err) => dispatch(setFlash('Failed to retrieve posters', 'red')) )
  }
}

export default ( state=[], action ) => {
  switch(action.type){
    case POSTERS: 
      return action.posters 
    default: 
      return state
  }
}
