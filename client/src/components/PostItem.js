import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/profiledefault.png";

const PostItem = ({
  date,
  profileImageUrl,
  galleryPost,
  text,
  username,
  removePost,
  isCorrectUser
}) => (
  <div>
    <li className="list-group-item">
      <img
        src={profileImageUrl || DefaultProfileImg}
        alt={username}
        height="100"
        width="100"
        className="timeline-image"
      />
      <div className="message-area">
        <Link to="/">@{username}&nbsp;</Link>
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment>
          <a>{username}</a>
        </span>
        <div>
          <img src={galleryPost} alt={username}/>
        </div>
        <p>{text}</p>
        {isCorrectUser && (
          <button><a className="btn btn-danger" onClick={removePost}>
            Delete
          </a></button>
        )}
      </div>
    </li>
  </div>
);

export default PostItem;