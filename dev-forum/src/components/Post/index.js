import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
componentDidMount() {
    let dataURL = "http://headless-wp.dev/wp-json/wp/v2/movies?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res
        })
      })
  }
render() {
return (
      <div>
        <h2>Star Wars Movies</h2>
      </div>
    )
  }
}
export default App;
