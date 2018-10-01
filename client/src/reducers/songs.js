import axios from 'axios'
import { setFlash } from './flash'

const SONGS = 'SONGS'

export const getSongs = () => {
  return(dispatch) => {
    axios.get('/api/songs')
      .then(res => {
        dispatch({ type: SONGS, songs: res.data })
      })
      .catch( (err) => dispatch(setFlash('Failed to retrieve songs', 'red')) )
  }
}

export default ( state=[], action ) => {
  switch(action.type){
    case SONGS:
      return action.songs
    default:
      return state
  }
}
