import axios from 'axios'
import { setFlash } from './flash'

const GAMES = 'GAMES'

export const getGames = () => {
    return (dispatch) => {
      axios.get('/api/games')
      .then(res => {
        dispatch({ type: GAMES, games: res.data })
      })
      .catch( (err) => dispatch(setFlash('Failed to retrieve games', 'red')) )
    }
}

export default ( state=[], action ) => {
  switch(action.type){
    case GAMES:
      return action.games
    default: 
      return state
  }
}
