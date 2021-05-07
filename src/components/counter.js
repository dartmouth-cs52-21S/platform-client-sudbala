import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// this can be dumb or smart component - connect works with either
const Counter = (props) => {
  return (
    <div>
      Current Count: {props.count}
    </div>
  );
};

// connects particular parts of redux state to this components props
// Use the combined reducer state
const mapStateToProps = (state) => (
  {
    count: state.,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, null)(Counter));
