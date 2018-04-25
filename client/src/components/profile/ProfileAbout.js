import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];

    // Skill List
    const interests = profile.interests.map((interest, index) => (
      <ol key={index} className="p-3">
        <i className="" /> {interest}
      </ol>
    ));

    return (
      <div className="container-fluid">
        <h3 className="profile-heading">{firstName}'s Bio</h3>
          <p className="lead">
            {isEmpty(profile.bio) ? (
              <span>{firstName} does not have a bio</span>
            ) : (
              <span>{profile.bio}</span>
            )}
          </p>
          <hr />
          <h3 className="profile-interests">Interests</h3>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {interests}
            </div>
          </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
