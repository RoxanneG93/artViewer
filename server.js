const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');

const keys = require("./config/keys");

const app = express();

//require models
require("./models/testModel");

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//connect to db
mongoose.connect(keys.MONGO_URI, () => console.log("DB Connected"));

//import and call routes
// require("./routes/testRoutes")(app);
require("./routes/users")(app);
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Live on ${PORT}`));
