/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../actions';
import Modal from './modal';

class SignUp extends Component {
  // This component locally needs to keep track of each item that will then be put into the global state.
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      authorname: '',
    };
  }

  showModal = (event) => {
    this.setState({
      show: true,
    });
  };

  showModalPassword = (event) => {
    this.setState({
      showPass: true,
    });
  };

  closeModal = (event) => {
    this.setState({
      show: false,
    });
  }

  closeModalPassword = (event) => {
    this.setState({
      showPass: false,
    });
  }

  // adapted from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    return (
      <div className="new-post">
        <div>
          <h2>Name</h2>
          <input className="edit-title" value={this.state.authorname} onChange={(event) => { this.setState({ authorname: event.target.value }); }} />

          <h2>Email</h2>
          <input className="edit-title" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }); }} />

          <h2>Password</h2>
          <input className="edit-tags" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }); }} />

          <h2>Confirm Password</h2>
          <input className="edit-tags" value={this.state.confirmPassword} onChange={(event) => { this.setState({ confirmPassword: event.target.value }); }} />

        </div>
        {/* <div>Mini Preview</div> */}
        <div>
          <i
            className="fas fa-check"
            role="button"
            onClick={(event) => {
              if (!this.validateEmail(this.state.email)) {
                this.showModal();
              } else if (this.state.password !== this.state.confirmPassword) {
                this.showModalPassword();
              } else {
                this.closeModal();
                this.closeModalPassword();
                this.props.signupUser(this.state, this.props.history);
              }
            }}
          />
          <Modal show={this.state.show}>Invalid Email</Modal>
          <Modal show={this.state.showPass}>Passwords Must Match</Modal>
        </div>
      </div>
    );
  }
}

// This one doesn't need to access the global redux state, so I think we don't need mapstatetoprops
// But we do need a mapdispatchtoprops for createpost
export default withRouter(connect(null, { signupUser })(SignUp));
