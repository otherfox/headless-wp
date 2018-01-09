import React from 'react';
import PostItem from './post-item';

const PostsGrid = ({posts}) => {
  posts = posts.map( i => <PostItem key={i.id} post={i} /> );

  return (
    <div className="posts-grid clear">
      { posts }
    </div>
  )
};

export default PostsGrid;
