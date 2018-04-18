const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.occupation = !isEmpty(data.occupation) ? data.occupation : '';
  data.interests = !isEmpty(data.interests) ? data.interests : '';

  if (!Validator.isLength(data.username, { min: 2, max: 40 })) {
    errors.username = 'Username needs to between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Profile username is required';
  }

  if (Validator.isEmpty(data.occupation)) {
    errors.occupation = 'Occupation field is required';
  }

  if (Validator.isEmpty(data.interests)) {
    errors.interests = 'Interests field is required';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};