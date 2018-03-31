// const 	mongoose = require("mongoose"),
// 		keys = require("../config/keys");


// mongoose.set('debug', true);
// mongoose.Promise = Promise;

// //connect to db
// mongoose.connect(keys.MONGO_URI, () => console.log("DB Connected"));

// module.exports.User = require("./user");
// module.exports.Post = require("./post");


// Was the local database connetion below


const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/art-viewer2", {
  keepAlive: true
});

module.exports.User = require("./user");
module.exports.Post = require("./post");