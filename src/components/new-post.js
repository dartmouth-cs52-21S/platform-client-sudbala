/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { createPost } from '../actions';

class NewPost extends Component {
  // This component locally needs to keep track of each item that will then be put into the global state.
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      content: '',
      coverUrl: '',
    };
  }

  render() {
    return (
      <div className="new-post">
        <div>
          <h2>Title</h2>
          <input className="edit-title" value={this.state.title} onChange={(event) => { this.setState({ title: event.target.value }); }} />

          <h2>Tags</h2>
          <input className="edit-tags" value={this.state.tags} onChange={(event) => { this.setState({ tags: event.target.value }); }} />

          <h3>Content</h3>
          <TextareaAutosize className="editing-content" onChange={(event) => { this.setState({ content: event.target.value }); }} value={this.state.content} />

          <h3>Cover URL (GIF/IMG)</h3>
          <input className="edit-cover" value={this.state.coverUrl} onChange={(event) => { this.setState({ coverUrl: event.target.value }); }} />
        </div>
        {/* <div>Mini Preview</div> */}
        <div>
          <i
            className="fas fa-check"
            role="button"
            onClick={(event) => {
              this.props.createPost({
                title: this.state.title,
                tags: this.state.tags,
                content: this.state.content,
                coverUrl: this.state.coverUrl,
              }, this.props.history);
            }}
          />
        </div>
      </div>
    );
  }
}

// This one doesn't need to access the global redux state, so I think we don't need mapstatetoprops
// But we do need a mapdispatchtoprops for createpost
export default withRouter(connect(null, { createPost })(NewPost));
