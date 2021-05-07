/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchPost, updatePost, deletePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);
    // We now have to worry about a state because we can edit here itself.
    this.state = {
      title: props.post.title,
      tags: props.posts.tags,
      content: props.posts.content,
      coverUrl: props.posts.coverUrl,
      titleEdit: false,
      tagsEdit: false,
      contentEdit: false,
      coverUrlEdit: false,
    };
  }

  // Rendering Title
  renderTitle = () => {
    if (this.state.titleEdit) {
      return (
        <div className="title">
          <input className="edit-title" value={this.state.title} onChange={(event) => { this.setState({ title: event.target.value }); }} />
          <i
            className="fas fa-check"
            role="button"
            onClick={(event) => {
              this.setState({ titleEdit: false });
              this.props.updatePost(this.props.post.id, { title: this.state.title });
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="title">
          <p className="post-title" onClick={(event) => { this.setState({ titleEdit: true }); }}>{this.state.title}</p>
        </div>
      );
    }
  }


// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    posts: state.posts.post,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, { fetchPost, updatePost, deletePost })(Post));
