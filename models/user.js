const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    profileImageUrl: {
      type:String,
    },
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'posts'
    }]
});

userSchema.pre('save', function(next){
  let user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, 10).then(function(hashedPassword) {
      user.password = hashedPassword
      next();
  }, function(err){
    return next(err)
  });
});

userSchema.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return next(err);
    next(null, isMatch);
  });
};

const User = mongoose.model('User', userSchema);
module.exports = User;