require("dotenv").config()

const express = require("express"),
 		  mongoose = require("mongoose"),
 		  bodyParser = require('body-parser'),
		  cors = require('cors'),
		  authRoutes = require('./routes/auth'),
		  postsRoutes = require('./routes/posts'),
      errorHandler = require('./helpers/error'),
		  {loginRequired, ensureCorrectUser} = require('./middleware/auth'),
		  db = require('./models'),
		  app = express();

//require models
// require("./models/testModel");

// Middlewares
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));


//import and call routes
// require("./routes/testRoutes")(app);
// require("./routes/users")(app);
// app.use('/users', require('./routes/users'));

// app.get('/', function(req, res){
// 	res.json({message: "make a POST request to /api/auth/singup to signup"});
// });

app.use('/api/auth', authRoutes);

app.use('/api/users/:id/posts', 
        loginRequired, 
        ensureCorrectUser,
        postsRoutes);

app.get('/api/posts', loginRequired, async function(req, res, next){
  try{
    let posts = await db.Post.find()
      // .sort({ createdAt: "desc "})
      .populate("user", {
        username: true,
        profileImageUrl: true
      });
      return res.status(200).json(posts);
  } catch(err){
    return next(err);
  }
});


app.use(function(req, ers, next){
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
})

app.use(errorHandler);

// Connect to server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Live on ${PORT}`));
