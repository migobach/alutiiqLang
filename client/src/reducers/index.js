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
import games from './games'
import items from './items'
import editables from './editables'
import postbases from './postbases';

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
  items,
  editables,
  postbases,
  flash
});

export default rootReducer;
