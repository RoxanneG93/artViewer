const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require('jsonwebtoken');
const helpers = require('../helpers/auth');

router.post('/signin', helpers.signin);
router.post('/signup', helpers.signup);

module.exports = router;