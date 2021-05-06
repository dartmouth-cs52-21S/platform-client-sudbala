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
  axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
    // do something with response.data  (some json)
  }).catch((error) => {
    // hit an error do something else!
  });
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
