import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{ post.title.rendered }</h2>
      <div dangerouslySetInnerHTML={ {__html: post.content.rendered } }></div>
    </div>
  )
}

export default Post;
