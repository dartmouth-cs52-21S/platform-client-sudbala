import React from 'react';
import {
  BrowserRouter as NavLink,
} from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink exact to="/">NoSleep</NavLink></li>
        <li><NavLink to="/posts/new">New Scare</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
