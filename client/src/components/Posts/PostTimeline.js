import React from 'react';
import PostList from './PostList';
import UserAside from './UserAside';

const PostTimeline = ({profileImageUrl, username, posts}) => (
  <div className="row">
    <UserAside
       profileImageUrl={profileImageUrl}
       username={username}
    />
    <PostList posts={posts} />
  </div>
);

export default PostTimeline;