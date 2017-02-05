# NodeJs-

### http request-
- get
- post
- put
- patch
- delete

### require dependency-
```
var dep = require('dependency");
```

### Npm install dependency-
```
npm install dep
```

### Express-
```
var app=require("express");
app.get( "/" ,function(req,res){
res.send("");
});
```
Tell express to listen
```
app.listen(3000,function(){
});
```
for all other requests
```
app.get( "*" ,function(req,res){
res.send("");
});
```

### package.json-

create package.json
```
npm init
```
add dependency
```
npm install dep --save
```


### route params-
- represent by **:variable**

- access by **req.params.variable**

- returns req.params object which contains all the params

```
var app=require("express");
app.get( "/:page" ,function(req,res){
res.send("welcome to"+req.params.);
});
```
### Ejs-

- Embedded Javascript
- in **/views/** directory

```
<html>
<%=  
//Embeded Js
%>
<%
//Execute Js
%>
</html>
```
render in routes by
```

app.get("/",function(req,res){
res.render("file.ejs");
});

```

can pass values by-
```

app.get("/:var",function(req,res){
res.render("file.ejs",{variable : var});
});

```
stylesheet in **/public**
```
app.use(express.static("public"));
```
look only ejs files
```
app.set("view engine", "ejs");

```
### Partials-
Include partials ejs-
```
<%
include /partials/header
%>
```
computes header.ejs from partials in views directory

### Post request-
in form tag in ejs 
```
<form action="/pageRoute" method="post">

</form>
```
- install body-parser to extract data on server
- takes data from form and parse it into js object
- result is stored in **req.query** object

```
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));

app.post("/pageRoute",function(req,res){

});
```
### page redirect -
```
res.redirect("/page");
```
### curl-
http request from terminal
```
$curl http://google.com
```
### request-
```
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
})
```
### Json-
Javascript object notation
```
{
	"key":"value";
}
```
comes as string,parse into object to use
```
var data = JSON.parse(data);
```