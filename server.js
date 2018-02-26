const express = require("express");
const mongoose = require("mongoose");

const keys = require("./config/keys");

const app = express();

//require models
require("./models/testModel");

//connect to db
mongoose.connect(keys.MONGO_URI, () => console.log("DB Connected"));

//import and call routes
require("./routes/testRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Live on ${PORT}`));
