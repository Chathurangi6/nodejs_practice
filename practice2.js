var express=require('express');
var app=express();
var fs=require('fs');
var path=require('path');
var bodyparser=require('body-parser');
app.use(bodyparser());

app.use('/mycss',express.static(__dirname+'/css'));
app.get("/",function(req,res){
    res.sendFile('home.html',{root:__dirname});
   //res.end("my name is "+JSON.stringify(req.query.name))
});
app.post("/user",function(req,res){
    res.end("my name is "+JSON.stringify(req.body.firstname)+" "+JSON.stringify(req.body.lastname))
});
app.get(/^(.+)/,function(req,res){
    try{
        if(fs.statSync(path.join(__dirname,'views',req.params[0]+'.html'))){
            res.sendfile(req.params[0]+'.html',{root:path.join(__dirname,'views')});
        }
    }
    catch(error){
        res.sendfile('404.html',{root:path.join(__dirname,'views')});
    }
    
    
});
app.listen(8080,function(){
    console.log("server is up");
});