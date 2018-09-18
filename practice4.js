var express=require('express');
var app=express();
var bodyparser=require('body-parser');
app.use(bodyparser());
var sessions=require('express-session');
var session;

app.use(sessions({
    secret:'chathu123'
}));

app.get('/logout',function(req,res){
    req.session.destroy();
    res.redirect('/');
});
app.get('/',function(req,res){
    
    session=req.session;
    if(session.userid){
        res.end("welcome admin <a href=\'/logout'>click to logout</a>");
    }else
        res.sendFile('/login.html',{root:__dirname});
    
});
app.post('/login',function(req,res){
    console.log(req.body.username);
    if(req.body.username=='admin' && req.body.password=='admin'){
        session=req.session;
        res.end("welcome admin <a href=\'/logout'>click to logout</a>");
    }
    else{
        res.end("invalid username or password");
    }
});
app.listen(8080,function(){
    console.log("running");
})
