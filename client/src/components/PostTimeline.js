import React from "react";
import PostList from "../containers/PostList";
import UserAside from "./UserAside";
import css from "./PostTimeline.css";

const PostTimeline = props => {
  return (
    <div className="container">
      <div className="user-profile">
        <UserAside 
          profileImageUrl={props.profileImageUrl}
          username={props.username}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
          	 <PostList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTimeline;