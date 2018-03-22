const express = require("express");
const router = express.Router({mergeParams: true});
const db = require("../models");
const { createPost, getPost, deletePost } = require('../helpers/posts');

// prefix - /api/users/:id/posts
router.route("/").post(createPost);

// prefix - /api/users/:id/posts/:post_id
router
	.route("/:post_id")
	.get(getPost)
	.delete(deletePost);

module.exports = router;