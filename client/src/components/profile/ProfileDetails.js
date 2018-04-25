import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileDetails extends Component {
  render() {
    const { profile } = this.props;
    console.log(this.props);

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];

    // Skill List
    const interests = profile.interests.map((interest, index) => (
      <ol key={index} className="p-3">
        <i className="" /> {interest}
      </ol>
    ));

    return (
      <div className="container">
        <div className="container" >
            <img
              className="rounded-circle"
              src={profile.user.profilepic}
              alt=""
            />
            <h1 className="display-4 text-center">{profile.user.name}</h1>
            <p className="lead text-center">
              {profile.occupation}{' '}
              {isEmpty(profile.username) ? null : (
                <span>at {profile.username}</span>
              )}
            </p>
            {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
            <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.website}
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.youtube}
                    target="_blank"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p>
        </div>
        <div className="container-fluid">
          <div><h3 className="profile-heading">{firstName}'s Bio</h3></div>
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
      </div>
    );
  }
}

ProfileDetails.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileDetails;
