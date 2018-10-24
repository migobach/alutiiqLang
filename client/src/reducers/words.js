import axios from 'axios'
import { setFlash } from './flash'

const WORDS = 'WORDS'

export const getWords = () => {
  return(dispatch) => {
    axios.get('/api/dictionaries')
      .then(res => {
        dispatch({ type: WORDS, words: res.data })
      })
      .catch( (err) => dispatch(setFlash('Failed to retrieve words', 'red')) )
    }
  }

export default ( state=[], action ) => {
  switch(action.type){
    case WORDS:
      return action.words
    default:
      return state
  }
}
