import { combineReducers } from 'redux';
import user from './user';
import flash from './flash'; 
import songs from './songs'
import materials from './materials'

const rootReducer = combineReducers({
  user,
  songs,
  materials,
  flash
});

export default rootReducer;
