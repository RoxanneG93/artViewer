import React from 'react';
import PostTimeline from './Posts/PostTimeline';

const Homepage = ({currentUser, posts}) => {
  if (!currentUser) {
    return <div style={{textAlign: 'center'}}>Please login</div>;
  }
  return (
    <PostTimeline
      profileImageUrl={currentUser.profileImageUrl}
      username={currentUser.username}
      posts={posts}
    />
  );
}

export default Homepage;