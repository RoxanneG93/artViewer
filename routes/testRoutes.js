// //import mongoose
// const mongoose = require("mongoose");

// //import relevant mongoose model
// const Test = mongoose.model("test");

// //create the export for the file. Call in server.js with the app object.
// module.exports = app => {
//   //routes inside become live when server.js runs the function
//   app.get("/", (req, res) => {
//     res.send("Route is up and running");
//   });

//   app.get("/newUser", (req, res) => {
//     new Test({
//       firstName: "Bob",
//       lastName: "Smith"
//     })
//       .save()
//       .then(test => res.send(test))
//       .catch(e => res.send(e));
//   });
// };
