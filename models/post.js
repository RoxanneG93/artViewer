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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
});

postSchema.pre('remove', async function(next){
  // find a user
  try {
    let user = await User.findById(this.userId);
    // remove the id of the message fro thier message list
    user.post.remove(this.id);
    // save the user and return next
    await user.save()
    // return next
    return next();

  } catch(error){
    return next(error);
  }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;