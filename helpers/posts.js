const db = require('../models');

exports.createPost = async function(req,res,next){

  try {
    let post = await db.Post.create({
      galleryPost: req.body.text,
      text: req.body.text,
      userId: req.params.id
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.posts.push(post.id);
    await foundUser.save();
    let foundPost = await db.Post.findById(post._id).populate("user", {
      username: true,
      profileImageUrl: true
    });
    return res.status(200).json(foundPost);
  } catch(error){
    return next(error);
  }
};


// GET /api/users/:id/messages/:message_id
exports.getPost = async function(req, res, next){
  try {
    let post = await db.Post.find(req.params.post_id);
    return res.status(200).json(post);
  } catch(err){
      return next(err);
  }
};  

// DELETE /api/users/:id/messages/:message_id
exports.deletePost = async function(req, res, next){
  try {
    let foundPost = await db.Post.findById(req.params.post_id);
    await foundPost.remove();
    return res.status(200).json(foundPost);
  } catch(err){
    return next(err);
  }
};  

module.exports = exports;