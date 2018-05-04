const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profilepic: {
    type: String
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  },
  posts: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);