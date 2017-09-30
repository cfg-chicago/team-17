var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

//var fourthGrade = {'grade':'4', 'students':{'number':'10', 'names':['DG', 'Dan', 'Alyssa']}};

var data1 = {'groups':['Group 1', 'Group 2', 'Group 3']};
var data2 = {'students':['Dan', 'Tyler', 'Alyssa']};



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
	console.log(req.query);
	if(req.query.grade == 4){
		res.render('groups', {data1:data1, data2:data2});
		console.log('made it');
	} else{
		res.render("groups");
		console.log('Didnt made it');
	}
});


//Profile Page for each 
app.get('/timeline', function(req, res){
	res.render("timeline");
});


//Where to listen
app.listen(port, function(){
	console.log('Server is running on port 3000');
});
