const express = require("express");
const router = express.Router({mergeParams: true});
const db = require("../models");
const helpers = require('../helpers/posts');

router.post('/', helpers.createPost);


module.exports = router;