import React from "react";
import DefaultProfileImg from "../images/profiledefault.png"

const UserAside = ({ profileImageUrl, username }) => (
  <div className="container">
    <div className="card">
      <img
        src={profileImageUrl || DefaultProfileImg}
        alt={username}
        width="200"
        height="200"
        className="card-img-top"
      />
      <div className="card-body">
        <h5>{username}</h5>
        <p class="card-text">This is the user profile.</p>
      </div>
      <div class="card-body">
      <a href="#" class="card-link">Logout</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    </div>
  </div>

);

export default UserAside;