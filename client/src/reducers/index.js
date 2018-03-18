import {combineReducers} from 'redux';
import currentUser, {getCurrentUser} from './currentUser';
import posts from './posts';

export {getCurrentUser};

const rootReducer = combineReducers({
  currentUser,
  posts,
});

export default rootReducer;