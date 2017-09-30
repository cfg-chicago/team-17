var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000
var app = express();

app.set('view engine', 'ejs');



//Login Page
app.get('/', function(req,res){
	
	//Change to login if implemented
	res.render("home");
});


//Home Page (Where all Grades will be displayed)
app.get('/home', function(req,res){
	res.render("home");
});


//Group Page (Where groups within grades will be displayed)
app.get('/groups', function(req, res){
	res.render("groups");
});


//Profile Page for each 
app.get('/timeline', function(req, res){
	res.render("timeline");
});


//Where to listen
app.listen(port, function(){
	console.log('Server is running on port 3000');
});
