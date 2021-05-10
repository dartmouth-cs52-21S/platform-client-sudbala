import React, { Component } from 'react';

// Too lazy to make it an actual modal :(
// eslint-disable-next-line react/prefer-stateless-function
class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return <div className="input-validation">{this.props.children}</div>;
  }
}

export default Modal;
