var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req,res){
	res.render("home");
});

app.get('/groups', function(req, res){
	res.render("groups");
});

app.get('/timeline', function(req, res){
	res.render("timeline");
});

app.listen(port, function(){
	console.log('Server is running on port 3000');
});
