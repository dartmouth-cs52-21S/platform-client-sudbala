import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

// 'as' keyword lets us rename BrowserRouter to Router
// So that webpack understands to include the style. Webpack won't include anything not used by app directly.

class Nav extends Component {
  renderAuthFeatures = () => {
    if (!this.props.authenticated) {
      return (
        <div className="sign-up-in">
          <ul>
            <li><NavLink to="/signin">Sign In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="sign-up-in">
          <h2 onClick={(event) => {
            this.props.signoutUser(this.props.history);
          }}
          >Sign Out
          </h2>
        </div>
      );
    }
  };

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li><NavLink exact to="/">NoSleep</NavLink></li>
          {this.renderAuthFeatures()}
          <li><NavLink to="/posts/new">New Scare +</NavLink></li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signoutUser })(Nav));
