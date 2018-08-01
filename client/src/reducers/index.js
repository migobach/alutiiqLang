import { combineReducers } from 'redux';
import user from './user';
import flash from './flash'; 
import songs from './songs'
import materials from './materials'
import words from './words'
import curriculum from './curriculum'

const rootReducer = combineReducers({
  user,
  songs,
  materials,
  curriculum,
  words,
  flash
});

export default rootReducer;
