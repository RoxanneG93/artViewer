const JWT = require('jsonwebtoken');
const User = require('../models/user');
const {JWT_SECRET} = require('../config/keys');

signToken = user => {
	return JWT.sign({
		iss: 'Roxy',
		sub: user._id,
		iat: new Date().getTime(),
		exp: new Date().setDate(new Date().getDate() + 1)
	}, JWT_SECRET);
}

module.exports = {
	signUp: async (req, res, next) => {
		// get email and password
		// req.value.body
		console.log('contents of req.value.body', req.value.body);
		console.log('usersController.signup() called');

		const {email, password } = req.value.body;

		// Check if there is a user with the same email
		const foundUser = await User.findOne({ email });
		if(foundUser){ 
			return res.status(409).json({ error: "email is already in use"});
		}

		// Create a new User
		// const newUser = new User({
		// 	email: email,
		// 	password: password
		// });
		// ****ES6 version of the above
		const newUser = new User({ email, password });
		await newUser.save();

		// Generate Token
		const token = signToken(newUser);

		
		// Respond with Token
		res.status(200).json({ token });

	},
	signIn: async (req, res, next) => {
		// Generate Token
		
	},
	secret: async (req, res, next) => {
		
	}
}