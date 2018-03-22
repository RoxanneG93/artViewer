const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require('jsonwebtoken');
const {signup, signin } = require('../helpers/auth');

router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;