import React, { Component } from 'react';


class PostItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    }
  }
  render() {
    console.log(this.props.post);
    return (
      <div className="post-item">
        <div className="hexagon">
          <h2>{ this.props.post.title.rendered }</h2>
        </div>
      </div>
    )
  }
}

export default PostItem;
