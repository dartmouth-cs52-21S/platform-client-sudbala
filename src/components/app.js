import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Nav from './nav';
import Posts from './posts';
import NewPost from './new-post';
import Post from './post';
import SignIn from './sign-in';
import SignUp from './sign-up';

// 'as' keyword lets us rename BrowserRouter to Router
// So that webpack understands to include the style. Webpack won't include anything not used by app directly.

// Fallback Page
const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

// The App Component YuH
const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/posts/new" component={NewPost} />
          <Route exact path="/posts/:postID" component={Post} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
