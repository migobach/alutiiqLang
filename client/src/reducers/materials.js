import axios from 'axios'
import { setFlash } from './flash'

const MATERIALS = 'MATERIALS'

export const getMaterials = () => {
  return(dispatch) => {
    axios.get('/api/materials')
      .then(res => {
        dispatch({ type: MATERIALS, materials: res.data })
      })
      .catch( (err) => dispatch(setFlash('Failed to retrieve materials', 'red')) )
  }
}

export default ( state=[], action ) => {
  switch(action.type){
    case MATERIALS:
      return action.materials
    default: 
      return state
  }
}