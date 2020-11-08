
const express = require("express");
const bodyParser=require("body-parser");

var app= express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var num2=req.body.txt;
    console.log(num2);
    var result=eval(num2);
    console.log(result);
})

app.listen(4400,function(){
    console.log("starting server on port 4400 visit:http://localhost:4400");
});