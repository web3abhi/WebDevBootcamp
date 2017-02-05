var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/result",function(req,res){
	var searchName=req.query["searchName"];
	var url="http://www.omdbapi.com/?s="+searchName;
	request(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			body=JSON.parse(body);
			res.render("resultPage",{body : body});
		}
		else
			res.send("error 404:page not found");
			
	})
});

app.listen("3000", function(){
	console.log("Server is listening!!!"); 
});
