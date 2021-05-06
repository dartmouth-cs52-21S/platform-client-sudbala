// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';
import PostsReducer from './post-reducer';

const rootReducer = combineReducers({
  count: PostsReducer,
});

export default rootReducer;
