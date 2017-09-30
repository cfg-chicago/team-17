var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();


//Database Setup
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


//CREATE DATABASE
/**********************************************************************************/
Group.create(
	{
		fourth: 
			{
			grade: 4,
			students: [
						{name:'Tyler', team:0}, 
						{name:'Dan', team:0}, 
						{name:'Michael', team:0}, 
						{name:'Bill', team:1}, 
						{name:'Lamont', team:1}, 
						{name:'Tisa', team:2}, 
						{name:'Johnny', team:2} 
					],
			teamNames: ['Cheetah Girls', 'Mario Brothers', 'Fudge Sticks']
			},

		fifth: 
			{
			grade: 5,
			students: [
						{name:'Emma', team:0}, 
						{name:'Noah', team:0}, 
						{name:'Liam', team:0}, 
						{name:'Olivia', team:1}, 
						{name:'Ava', team:1}, 
						{name:'Ethan', team:2}, 
						{name:'Mason', team:2} 
					],
			teamNames: ['Warriors', 'Team Morgan', 'Rough Riders']
			},

		sixth:
			{
			grade: 6,
			students: [
						{name:'Mia', team:0}, 
						{name:'Oliver', team:0}, 
						{name:'Aiden', team:0}, 
						{name:'Charlotte', team:1}, 
						{name:'Amelia', team:1}, 
						{name:'Harper', team:2}, 
						{name:'James', team:2} 
						],
			teamNames: [
						'Cowboys', 
						'Princesses', 
						'Team Sixth Graders'
						]
			},

		seventh:
			{
			grade: 7,
			students: [
						{name:'Ben', team:0}, 
						{name:'Emily', team:0}, 
						{name:'Abigail', team:0}, 
						{name:'Logan', team:1}, 
						{name:'Avery', team:1}, 
						{name:'Sofia', team:2}, 
						{name:'Ella', team:2} 
						],
			teamNames: [
						'G.I. Joe', 
						'Donkey Kong', 
						'Owls'
						]
			},

		eigth:
			{
			grade: 8,
			students: [
						{name:'Aria', team:0}, 
						{name:'Evelyn', team:0}, 
						{name:'Chloe', team:0}, 
						{name:'Scarlet', team:1}, 
						{name:'William', team:1}, 
						{name:'Gabriel', team:2}, 
						{name:'Lily', team:2} 
						],
			teamNames: ['The Best Group', 'Banking Fans','Strawberry Girls']
			}



	}, function(err, group){
		if(err){
			console.log('SOMETHING WENT WRONG');
		} else {
			console.log('NEWLY CREATED GROUP:');
			console.log(group);
			console.log();
		}
	});

/**********************************************************************************/




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
		Group.find({}, function(err, groups){
		if(err){
			console.log(err);
		} else {

			res.render('groups', {groups:groups});
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
