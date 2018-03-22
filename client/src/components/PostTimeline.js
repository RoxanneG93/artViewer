import React from "react";
import PostList from "../containers/PostList";
import UserAside from "./UserAside";

const PostTimeline = props => {
  return (
    <div className="row">
      <UserAside
        profileImageUrl={props.profileImageUrl}
        username={props.username}
      />
      <div>
      	<PostList />
      </div>
    </div>
  );
};

export default PostTimeline;