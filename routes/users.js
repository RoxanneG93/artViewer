const express = require('express');
const router = require('express-promise-router')();
const { validateBody, schemas } = require('../helpers/routeHelpers');


const Users = require('../controllers/users');


module.exports = app => {
  //routes inside become live when server.js runs the function
  app.get("/", (req, res) => {
    res.send("User Route is up and running");
  });

	router.route('/signup')
		.post(validateBody(schemas.authSchema), Users.signUp);

	router.route('/signin')
		.post(Users.signIn);

	router.route('/secret')
		.get(Users.secret);

	module.exports = router;

};