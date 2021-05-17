import { ActionTypes } from '../actions';

// PostReducer will currently only need to respond to 2 ActionTypes: FETCH_POSTS and FETCH_POST

const initialState = {
  authenticated: false,
};

// Learned about spread operator from https://redux.js.org/recipes/using-object-spread-operator
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true };
    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default AuthReducer;
