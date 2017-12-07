import React, { Component } from 'react';
import methods from './methods';

class App extends Component {
    constructor() {
        super();
        this.state = {
          post: []
        }
        this.props = {
            postType: 'posts',
            id: 1
        }
    }
    componentDidMount() {
        let dataURL = method.getPost(this.props.postType, this.props.id);
        fetch(dataURL)
          .then(res => res.json())
          .then(res => {
            this.setState({
              post: res
            })
          })
      }
    render() {
        return (
          <div>
            <h2>Star Wars Movies</h2>
          </div>
        )
    ]}
}
export default App;
