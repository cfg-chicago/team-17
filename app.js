var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000
var app = express();




app.get('/', function(req,res){
	res.render("home.html");
});

app.get('/groups', function(req, res){
	res.send("groups.html");
});

app.get('/groups/timeline', function(){})


app.listen(port, function(){
	console.log('Server is running on port 3000');
});
