import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/ArtLogo.png';
import './Navbar.css';

const Navbar = props => {
  const {currentUser, onLogout, profileImageUrl} = props;
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Home"/>
            <span>Art-viewer</span>
          </Link>
        </div>
        {currentUser ?
          <ul className="nav navbar-nav navbar-right">
            <li><a><img src={profileImageUrl} alt="user"/></a></li>
            <li><Link to={`/users/${currentUser.userId}/posts/new`}>New Post</Link></li>
            <li><Link to="/signin" onClick={onLogout}>Log out</Link></li>
          </ul> :
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/signin">Log in</Link></li>
          </ul>
        }
      </div>
    </nav>
  );
}

export default Navbar;