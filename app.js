var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000
var app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json());
var db;
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
	db = db;
 // db.close();
});

//Login Page
app.get('/', function(req,res){

	//Change to login if implemented
	res.render("home");
});


//Home Page (Where all Grades will be displayed)
app.get('/home', function(req,res) {
	db.collection('classmates', function(err, collection) {
		console.log("found collection");
	    collection.find().toArray(function(err, items) {
		console.log(items);
		res.send(items);
	    });
	});
});


//Group Page (Where groups within grades will be displayed)
app.get('/groups', function(req, res){
	res.render("groups");
});


//Profile Page for each
app.get('/timeline', function(req, res){

	res.render("timeline");
});




app.listen(port, function(){
	console.log('Server is running on port 3000');
});
