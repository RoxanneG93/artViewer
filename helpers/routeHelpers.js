// const Joi = require('joi');

// module.exports = {
// 	validateBody: (schema) => {
// 		return (req, res, next) => {
// 			const result = Joi.validate(req.body, schema);
// 			if(result.error){
// 				return res.status(400).json(result.error);
// 			}
// 			if(!req.value){ req.value = {};}
// 			req.value['body'] = result.value;
// 			next();
// 			// req.alue.body instead of req.body
// 		}
// 	},
// 	schemas: {
// 		authSchema: Joi.object().keys({
// 			email: Joi.string().email().required(),
// 			// can add password character limitation with joi
// 			password: Joi.string().required()
// 		})
// 	}
// }