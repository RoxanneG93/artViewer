import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts}) => {
  let postList = posts.map(p => (
    <PostItem
      key={p.id}
      date={p.createdAt}
      username={p.username}
      image={p.image}
      text={p.text}
      profileImageUrl={p.profileImageUrl}
    />
  ));
  return (
    <div className="col-sm-8">
      <ul className="list-group">
        {postList}
      </ul>
    </div>
  );
}

PostList.defaultProps = {
  posts: []
}

export default PostList;