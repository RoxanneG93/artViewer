const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';
  data.title = !isEmpty(data.title) ? data.title : '';
  data.image = !isEmpty(data.image) ? data.image : '';

  if (!Validator.isLength(data.text, { max: 300 })) {
    errors.text = 'Post must not exceed 300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.image)) {
    errors.image = 'image url required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
