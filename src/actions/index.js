import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // CREATE_POST: 'CREATE_POST',
  // DELETE_POST: 'DELETE_POST',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=sudharsan_balasubramani';

// We want a function that gets all posts
export function fetchAll() {
  return (dispatch) => {
    // here is where we do asynch axios calls
    // on completion of which we dispatch a new action, we can dispatch stuff now
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      // we dispactch the action to fetch all posts, making the payload the data we get back from the api server
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
    }).catch((error) => {
      // hit an error do something else!
      console.log(error);
    });
  };
}

/// IMPORTANT! API CALLS ONLY IN HERE, NOWHERE ELSE

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}
