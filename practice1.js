var mod=require('./modules');
var http=require("http");
http.createServer(function(req,res){
    res.end("hello world");
   
}).listen(8080);
console.log("nodejs is running");
mod.func1();
mod.func2();
console.log(mod.myvar);
console.log(mod);