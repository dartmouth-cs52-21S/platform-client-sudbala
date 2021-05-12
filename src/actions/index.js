import axios from 'axios';

// keys for actiontypes
export const ActionTypes = {
  // Think of as FETCH_POSTS_SUCCEEDED
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  ERROR_SET: 'ERROR_SET',
};

// const ROOT_URL = 'https://platform.cs52.me/api';
const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://platform-api-sudbala.herokuapp.com/api';
const API_KEY = '?key=sudharsan_balasubramani';
/// IMPORTANT! API CALLS ONLY IN HERE, NOWHERE ELSE

// Learned about axios calls from https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/

// We want a function that gets all posts
export function fetchPosts() {
  return (dispatch) => {
    // here is where we do asynch axios calls
    // on completion of which we dispatch a new action, we can dispatch stuff now
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      // we dispactch the action to fetch all posts, making the payload the data we get back from the api server
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
    }).catch((error) => {
      // hit an error do something else!
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}

export function createPost(post, history) {
  /* axios post */
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then((response) => {
      // I think this is all we need to do? Do we need to refetch the posts?
      history.push('/');
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}

export function updatePost(id, fields) {
  /* axios put */
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, fields).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}

export function fetchPost(id) {
  /* axios get */
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}

export function deletePost(id, history) {
  /* axios delete */
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      history.push('/');
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}
