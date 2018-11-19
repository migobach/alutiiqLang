import axios from 'axios'
import { setFlash } from './flash'

const ARTICLES = 'ARTICLES'

export const getArticles = () => {
  return(dispatch) => {
    axios.get('/api/erinarpets')
      .then(res => {
        dispatch({ type: ARTICLES, articles: res.data })
      })
      .catch( (err) => dispatch(setFlash('Failed to retrieve articles', 'red')) )
  }
}

export default ( state=[], action ) => {
  switch(action.type){
    case ARTICLES:
      return action.articles
    default:
      return state
  }
}
