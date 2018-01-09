import React, { Component } from 'react';
import WPApi from './services/api/wp_api';
import Post from './components/post';

class App extends Component {
    constructor() {
        super();
        this.state = {
          posts: [],
          selectedPost: null
        }

        WPApi({ method:'getPost', args: ['posts', 1] }, res => {
          this.setState({ selectedPost: res })
        });
    }
    render() {
        // If promise hasn't resolved yet
        if (!this.state.selectedPost) return <div>Loading ...</div>;

        return (
          <Post post={this.state.selectedPost} />
        )
    }
}
export default App;
