import { combineReducers } from 'redux';
import user from './user';
import flash from './flash'; 
import songs from './songs'
import materials from './materials'
import words from './words'
import curriculum from './curriculum'
import books from './books'
import articles from './articles'
import posters from './posters'
import games from './game'

const rootReducer = combineReducers({
  user,
  songs,
  materials,
  curriculum,
  words,
  books,
  articles,
  posters,
  games,
  flash
});

export default rootReducer;
