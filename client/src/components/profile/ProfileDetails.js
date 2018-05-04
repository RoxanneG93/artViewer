import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';
import defaultImage from '../../img/profiledefault.png';


class ProfileDetails extends Component {
  render() {
    const { profile, user} = this.props;
    console.log(this.props);
  
    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];

    // Skill List
    const interests = profile.interests.map((interest, index) => (
      <li key={index} className="">
        <i className="" /> {interest}
      </li>
    ));

    return (
      <div className="profile-details-wrapper container text-center">
            <img
              className="card-img-top"
              src={profile.user.profilepic}
              alt={defaultImage}
            />
            <h1 className="display-4 text-center">
              {isEmpty(profile.username) ? null : (
                <span> {profile.username}</span>
              )}
            </h1>
            <p className="lead text-center">Name: <strong>{profile.user.name}</strong></p>
            <p>Occupation: <strong>{profile.occupation}</strong> </p>
            Location: {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
            <hr />
            <h4>My Social Media Links:</h4>
            <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    className="text-dark p-2"
                    href={profile.website}
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    className="text-info p-2"
                    href={profile.social.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    className="text-primary p-2"
                    href={profile.social.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <a
                    className="text-danger p-2"
                    href={profile.social.youtube}
                    target="_blank"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}

                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    className="text-warning p-2"
                    href={profile.social.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p>
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
                  <ul>{interests}</ul>
                </div>
              </div>
        </div>
    );
  }
}

ProfileDetails.propTypes = {
  profile: PropTypes.object.isRequired,
  // posts: PropTypes.array.isRequired
};

export default ProfileDetails;
