import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Counter from './counter';
import Controls from './controls';
// 'as' keyword lets us rename BrowserRouter to Router
// So that webpack understands to include the style. Webpack won't include anything not used by app directly.

// About component
const About = (props) => {
  return <div> All there is to know about me </div>;
};

// Welcome Component
const Welcome = (props) => {
  return (
    <div>
      Welcome
      <Counter />
      <Controls />
    </div>
  );
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

// Nav component, an essential component. NavLink component rather than anchor tag, which by default adds an "active" class
const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

// The App Component YuH
const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
