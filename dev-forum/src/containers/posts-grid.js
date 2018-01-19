import React, { Component } from 'react';
import PostItem from './post-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';

class PostsGrid extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const posts = this.props.posts.map( i => <PostItem key={i.id} post={i} /> );

    return (
      <div className="posts-grid clear">
        { posts }
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsGrid);
