const mongoose = require("mongoose");
const User = require("./user");


const postSchema = new mongoose.Schema({
  galleryPost: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true,
    maxLength: 160
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
});

postSchema.pre('remove', function(next){
  User.findById(this.userId).then(user => {
    user.posts.remove(this.id);
    user.save().then(function(e){
      next();
    });
  }).catch(function(err) {
    next(err);
  });
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;