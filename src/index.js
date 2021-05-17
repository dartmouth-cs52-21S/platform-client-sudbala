import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './style.scss';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/app';
import { ActionTypes } from './actions';

// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  // Middleware are basically functions that run between other stuff?
  // Now ActionCreaters can return thinks rather than actions, these thunks are functions that are created on the fly to run something later. Hmmm
  // Okok so rather than just an intent to change something or do something, it actually does something before dispatching an action to reducer.
  // A redux thunk allows your ActionCreators to return functions that can then dispatch actions.
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: ActionTypes.AUTH_USER });
}

// we now wrap App in a Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);
