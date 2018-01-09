import React, { Component } from 'react';
import WPApi from './services/api/wp_api';
import PostsGrid from './components/posts-grid';

class App extends Component {
    constructor() {
        super();

        this.state = {
          posts: [],
          selectedPost: null
        }

        WPApi({ method:'getPosts', args: ['posts'] }, res => {
          this.setState({ posts: res })
        });
    }
    render() {
        // If promise hasn't resolved yet
        if (!this.state.posts) return <div>Loading ...</div>;

        return (
          <PostsGrid posts={this.state.posts} />
        )
    }
}
export default App;
