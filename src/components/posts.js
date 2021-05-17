import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { fetchPosts } from '../actions';

class Posts extends Component {
  // Connected component, relies on list of posts, need to fetch posts ActionCreator
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderJSXPostArray() {
    return this.props.posts.map((post) => {
      // For each post, recall that it actually needs to be a link to the real post itself
      // Adapted from lab manual at https://cs52.me/assignments/lab/redux-platform/
      return (
        <Link to={`/posts/${post._id}`} key={post._id}>
          <div className="post-tile-card">
            <img className="post-tile-card-img" src={post.coverUrl} alt={post.title} />
            <div className="post-tile-card-caption">
              <h1 className="post-tile-card-title">{post.title}</h1>
              <h2 className="post-tile-card-tags">{post.tags}</h2>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="post-tile-cards" key="post-tile-cards">
        <Masonry
          breakpointCols={4}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          key="masonry-view"
        >
          {this.renderJSXPostArray()}
        </Masonry>

      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts));
