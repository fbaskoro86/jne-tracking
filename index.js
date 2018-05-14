const express = require ('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');


// set up express app
const app = express();

// connect to MongoDB
mongoose.connect('mongodb://localhost/jne');
mongoose.Promise = global.Promise;

// Bodyparse to handle attribute at Body of the HTTP POST
app.use(bodyParser.json());

// initialize routes
app.use(routes);

// error handling middleware
app.use(function(err,req,res,next){
  console.log(err);
  res.status(422).send({error:err.message})
});

// listen for requests
app.listen (process.env.port || 4000, function(){
  console.log("Listening for request on port 4000");
});
