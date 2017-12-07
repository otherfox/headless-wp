import React, { Component } from 'react';
import getPost from './services/api/methods';

class App extends Component {
    constructor() {
        super();
        this.state = {
          post: []
        }
    }
    componentDidMount() {
        let dataURL = getPost('posts', 1);
        fetch(dataURL)
          .then(res => res.json())
          .then(res => {
            console.log(res.title.rendered);
            this.setState({
                post: res
            })
          })
      }
    render() {
        if (this.state.post.title == undefined){
            return (<div></div>);
        }
        return (
          <div>
            <h2>{ this.state.post.title.rendered }</h2>
            <div dangerouslySetInnerHTML={ {__html: this.state.post.content.rendered } }></div>
          </div>
        )
    }
}
export default App;
