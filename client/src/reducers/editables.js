import axios from 'axios'
import { setFlash } from './flash'

const EDITABLES = 'EDITABLES'

export const getEditablesData = () => {
  return(dispatch) => {
    axios.get('/api/editables')
      .then(res => {
        dispatch({ type: EDITABLES, editables: res.data })
      })
      .catch( (err) => dispatch(setFlash('Failed to retrieve dynamic data', 'red')) )
    }
  }

export default ( state=[], action ) => {
  switch(action.type){
    case EDITABLES:
      return action.editables
    default:
      return state
  }
}
