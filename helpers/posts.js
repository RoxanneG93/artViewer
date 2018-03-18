const db = require('../models');

exports.createPost = function(req,res,next){
  const newPost = {
    galleryPost: req.body.galleryPost,
    text: req.body.text,
    userId: req.params.id
  };
  
  db.Post.create(newPost).then(function(post){
    db.User.findById(req.params.id).then(function(user){
      user.posts.push(post.id)
      user.save().then(function(user) {
        return db.Post.findById(post._id)
          .populate("userId", {username: true, profileImageUrl: true})
      }).then(function(m) {
        return res.status(200).json(m);
      }).catch(next);
    }).catch(next);
  }).catch(next);
};

module.exports = exports;