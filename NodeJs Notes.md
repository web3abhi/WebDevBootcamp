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
represent by **:variable**

access by **req.params.variable**

returns req.params object which contains all the params

```
var app=require("express");
app.get( "/:page" ,function(req,res){
res.send("welcome to"+req.params.);
});
```
### Ejs-


