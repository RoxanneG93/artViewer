import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/profiledefault.png";

const PostItem = ({
  date,
  profileImageUrl,
  title,
  galleryPost,
  text,
  username,
  removePost,
  isCorrectUser
}) => (
  <div className="card">
    <img
      src={profileImageUrl || DefaultProfileImg}
      alt={username}
      height="100"
      width="100"
      className="timeline-image"
    />
    <Link to="/">@{username}&nbsp;</Link>
    <span className="text-muted">
      <Moment className="text-muted" format="Do MMM YYYY">
        {date}
      </Moment>
      <a>{username}</a>
    </span>
    <div className="card-body">
      <div>
        <h2 className="">{ title }</h2>
      </div>
      <div>
        <img src={ galleryPost } alt="" className="card-img-top"/>
      </div>
      <p className="card-text">{text}</p>
      {isCorrectUser && (
        <button><a className="btn btn-danger" onClick={removePost}>
          Delete
        </a></button>
      )}
      {isCorrectUser && (
        <button><a className="btn btn-warning">
          Edit
        </a></button>
      )}
    </div>
  </div>
);

export default PostItem;