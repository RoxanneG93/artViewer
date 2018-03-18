import React from 'react';
import {Link} from 'react-router-dom';
// import Moment from 'react-moment';
import './PostItem.css';
import DefaultProfileImg from '../../images/profiledefault.png';

const PostItem = (props) => {
  const {profileImageUrl, username, image, text, date} = props;
  // **** Want to add a random profile pic default function here eventually ***
  return (
    <li className="list-group-item message-container">
      <Link to="/">
        <img
          src={profileImageUrl || DefaultProfileImg}
          alt={`${username} profile`}
          className="timeline-image"
        />
      </Link>
      <div className="post-area">
        <Link to="/">{username}</Link>
        <p>{image}</p>
        <p>{text}</p>
      </div>
    </li>
  );
}

export default PostItem;