var express = require("express");
var app = express();

app.get("/",function(req,res){

	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:ani",function(req,res){
	
	var ani= req.params.ani.toLowerCase();
	var msg={
		'cow':'moo',
		'dog':'woof',
		'cat':'meow',
		'tiger':'roar',
		'pig':'oink'
	};
	var speak = msg[ani];
	res.send("the "+ani+" says "+ speak);
	
});

app.get("/repeat/:str/:num",function(req,res){
	var str=req.params.str;
	var result="";
	var num=Number(req.params.num);
	for(var i=0;i<num;i++){
		result+=" "+str;
	}
	res.send(result);
});

app.get("*",function(req,res){
	
	res.send("Sorry, page not found...What are you doing with your life?");
});


app.listen('3000',function(){
	console.log('Server running at port 3000!');
});
