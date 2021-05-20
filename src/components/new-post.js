/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { createPost } from '../actions';
import uploadImage from '../s3';
import Modal from './modal';

class NewPost extends Component {
  // This component locally needs to keep track of each item that will then be put into the global state.
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      content: '',
    };
  }

  onImageUpload = (event) => {
    const file = event.target.files[0];
    // Handle null file
    // Get url of the file and set it to the src of preview
    if (file) {
      this.setState({ preview: window.URL.createObjectURL(file), file });
    }
  }

  showModal = (event) => {
    this.setState({
      show: true,
    });
  };

  closeModal = (event) => {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div className="new-post">
        <div>
          <img id="preview" alt="preview" src={this.state.preview} />
          <input type="file" name="coverImage" onChange={this.onImageUpload} />

          <h2>Title</h2>
          <input className="edit-title" value={this.state.title} onChange={(event) => { this.setState({ title: event.target.value }); }} />

          <h2>Tags</h2>
          <input className="edit-tags" value={this.state.tags} onChange={(event) => { this.setState({ tags: event.target.value }); }} />

          <h3>Content</h3>
          <TextareaAutosize className="editing-content" onChange={(event) => { this.setState({ content: event.target.value }); }} value={this.state.content} />

        </div>
        {/* <div>Mini Preview</div> */}
        <div>
          <i
            className="fas fa-check"
            role="button"
            onClick={(event) => {
              if (this.state.title.length === 0 || this.state.tags.length === 0 || this.state.content.length === 0) {
                this.showModal();
              } else {
                this.closeModal();
                if (this.state.file) {
                  uploadImage(this.state.file).then((url) => {
                    this.props.createPost({
                      title: this.state.title,
                      tags: this.state.tags,
                      content: this.state.content,
                      coverUrl: url,
                    }, this.props.history);
                  }).catch((error) => {
                    console.log(error);
                  });
                }
              }
            }}
          />
          <Modal show={this.state.show}>Please fill out all the fields to make your Horror Post!</Modal>
        </div>
      </div>
    );
  }
}

// This one doesn't need to access the global redux state, so I think we don't need mapstatetoprops
// But we do need a mapdispatchtoprops for createpost
export default withRouter(connect(null, { createPost })(NewPost));
