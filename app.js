var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

//var fourthGrade = {'grade':'4', 'students':{'number':'10', 'names':['DG', 'Dan', 'Alyssa']}};

//var data1 = {'groups':['Group 1', 'Group 2', 'Group 3']};
//var data2 = {'students':['Dan', 'Tyler', 'Alyssa']};


//Database
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/wff");

//Schema Setup
var groupSchema = new mongoose.Schema({
	grade: Number,
	names: Array,
	teams: Array
});


//Compile into a model
var Group = mongoose.model("Group", groupSchema);

Group.create(
	{
		grade: 4,
		students: [{name:'Tyler', team:0}, {name:'Dan', team:0}, {name:'Michael', team:0}, {name:'Bill', team:1}, {name:'Lamont', team:1}, {name:'Tisa', team:2}, {name:'Johnny', team:2} ],
		teamNames: ['Cheetah Girls', 'Mario Brothers', 'Fudge Sticks']
	}, function(err, group){
		if(err){
			console.log('SOMETHING WENT WRONG');
		} else {
			console.log('NEWLY CREATED GROUP:');
			console.log(group);
			console.log()
		}
	});


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

		//Store Database data in a variable
		Group.find({}, function(err, fourth){
		if(err){
			console.log(err);
		} else {

			res.render('groups', {fourth:fourth});
			console.log('made it');
		}


		
		});



		
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
