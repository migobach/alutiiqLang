import axios from 'axios'
import { setFlash } from './flash'

const CURRICULUMS = 'CURRICULUMS'

export const getCurriculum = () => {
  return(dispatch) => {
    axios.get('/api/curriculums')
      .then(res => {
        dispatch({ type: CURRICULUMS, curriculums: res.data })
      })
      .catch( (err) => dispatch(setFlash('Failed to retrieve curricular materials', 'red')) )
  }
}

export default ( state=[], action ) => {
  switch(action.type){
    case CURRICULUMS:
      return action.curriculums
    default: 
      return state
  }
}