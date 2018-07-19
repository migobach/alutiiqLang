import { combineReducers } from 'redux';
import user from './user';
import flash from './flash'; 
import songs from './songs'

const rootReducer = combineReducers({
  user,
  songs,
  flash
});

export default rootReducer;
