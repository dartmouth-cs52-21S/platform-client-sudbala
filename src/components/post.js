/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import ReactMarkdown from 'react-markdown';
import { fetchPost, updatePost, deletePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);
    // We now have to worry about a state because we can edit here itself.
    this.state = {
      title: props.post.title,
      tags: props.post.tags,
      content: props.post.content,
      coverUrl: props.post.coverUrl,
      titleEdit: false,
      tagsEdit: false,
      contentEdit: false,
      coverUrlEdit: false,
    };
  }

  // Component did mount, match params from https://cs52.me/assignments/sa/routing/
  componentDidMount() {
    // First, let us fetch the post
    this.props.fetchPost(this.props.match.params.postID);
    this.setState({
      title: this.props.post.title,
      tags: this.props.post.tags,
      content: this.props.post.content,
      coverUrl: this.props.post.coverUrl,
    });
  }

  // Rendering Title
  renderTitle = () => {
    if (this.state.titleEdit) {
      return (
        <div className="title-edit">
          <input className="edit-title" placeholder={this.props.post.title} onChange={(event) => { this.setState({ title: event.target.value }); }} />
          <i
            className="fas fa-check"
            role="button"
            onClick={(event) => {
              this.setState({ titleEdit: false });
              this.props.updatePost(this.props.post._id, { title: this.state.title });
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="title">
          <p className="post-title" onClick={(event) => { this.setState({ titleEdit: true }); }}>{this.props.post.title}</p>
        </div>
      );
    }
  }

  // Rendering Tags
  renderTags = () => {
    if (this.state.tagsEdit) {
      return (
        <div className="tags-edit">
          <input className="edit-tags" placeholder={this.props.post.tags} onChange={(event) => { this.setState({ tags: event.target.value }); }} />
          <i
            className="fas fa-check"
            role="button"
            onClick={(event) => {
              this.setState({ tagsEdit: false });
              this.props.updatePost(this.props.post._id, { tags: this.state.tags });
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="tags">
          <p className="post-tags" onClick={(event) => { this.setState({ tagsEdit: true }); }}>{this.props.post.tags}</p>
        </div>
      );
    }
  }

  // Rendering Content
  renderContent = () => {
    if (this.state.contentEdit) {
      return (
        <div className="content-edit">
          <TextareaAutosize className="editing-content" onChange={(event) => { this.setState({ content: event.target.value }); }} placeholder={this.props.post.content} />
          <i
            className="fas fa-check"
            role="button"
            onClick={(event) => {
              this.setState({ contentEdit: false });
              this.props.updatePost(this.props.post._id, { content: this.state.content });
            }}
          />
        </div>
      );
    } else {
      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div className="content" onClick={() => { this.setState({ contentEdit: true }); }}>
          <ReactMarkdown>{this.props.post.content || ''}</ReactMarkdown>
        </div>
      );
    }
  }

  // Rendering Content
  renderCoverImage = () => {
    if (this.state.coverUrlEdit) {
      return (
        <div className="cover-edit">
          <input className="edit-cover" placeholder={this.props.post.coverUrl} onChange={(event) => { this.setState({ coverUrl: event.target.value }); }} />
          <i
            className="fas fa-check"
            role="button"
            onClick={(event) => {
              this.setState({ coverUrlEdit: false });
              this.props.updatePost(this.props.post._id, { coverUrl: this.state.coverUrl });
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="cover">
          <img className="post-cover" onDoubleClick={(event) => { this.setState({ coverUrlEdit: true }); }} src={this.props.post.coverUrl} alt={this.props.post.title} />
        </div>
      );
    }
  }

  // Now render the entire thing
  // For deleting, learned about routing histories from https://dev.to/cesareferrari/the-history-prop-in-route-43je#:~:text=Route%20defines%20a%20history%20prop,URLs%20we%20have%20visited%20earlier.
  render() {
    console.log(this.props.error);
    if (this.props.error) {
      return <div>Failure to read from API</div>;
    } else {
      return (
        <div className="individual-post">
          {this.renderTitle()}
          {this.renderCoverImage()}
          {this.renderContent()}
          {this.renderTags()}
          <i
            className="far fa-trash-alt"
            role="button"
            onClick={(event) => { this.props.deletePost(this.props.post._id, this.props.history); }}
          />
        </div>
      );
    }
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    post: state.posts.current,
    error: state.posts.error,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, { fetchPost, updatePost, deletePost })(Post));
