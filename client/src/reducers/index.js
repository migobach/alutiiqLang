import { combineReducers } from 'redux';
import user from './user';
import flash from './flash'; 
import songs from './songs'
import materials from './materials'
import words from './words'

const rootReducer = combineReducers({
  user,
  songs,
  materials,
  words,
  flash
});

export default rootReducer;
