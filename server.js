require("dotenv").config()

const 	express = require("express"),
 		mongoose = require("mongoose"),
 		bodyParser = require('body-parser'),
		// keys = require("./config/keys"),
		cors = require('cors'),
		authRoutes = require('./routes/auth'),
		postsRoutes = require('./routes/posts'),
		auth = require('./middleware/auth'),
		db = require('./models'),
		app = express();

//require models
// require("./models/testModel");

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//import and call routes
// require("./routes/testRoutes")(app);
// require("./routes/users")(app);
// app.use('/users', require('./routes/users'));

app.get('/', function(req, res){
	res.json({message: "make a POST request to /api/auth/singup to signup"});
});

app.use('/api/users/:id/posts',
        auth.loginRequired, auth.ensureCorrectUser,
        postsRoutes);


app.use('/api/auth', authRoutes);

app.get('/api/posts', function(req, res, next) {
  db.Post.find().sort({createAt: 'desc'})
    .populate("userId", {username: true, profileImageUrl: true})
    .then(function(posts) {
      res.json(posts);
    }).catch(function(err) {
      res.status(500).json(err);
    })
});



// Connect to server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Live on ${PORT}`));
