import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
// import Nav from './nav';
import Posts from './posts';
import NewPost from './new-post';
import Post from './post';
// 'as' keyword lets us rename BrowserRouter to Router
// So that webpack understands to include the style. Webpack won't include anything not used by app directly.

const Nav = (props) => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink exact to="/">NoSleep</NavLink></li>
        <li><NavLink to="/posts/new">New Scare +</NavLink></li>
      </ul>
    </nav>
  );
};

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
          <Route path="/posts/new" component={NewPost} />
          <Route exact path="/posts/:postID" component={Post} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
