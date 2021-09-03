var express = require("express");
var app=express();
var students=[];
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views','./view');

app.get("/",function(req,res){
    res.render("students",{
        allstudents:students
    })
})

app.get("/reg",function(req,res){
    res.sendFile(__dirname + "/register.html");
})
app.post("/register",function(req,res){
    console.log("request params data ::",req.body);
    students.push(req.body);
//res.send(JSON.stringify(students));
    res.render("students",{
        allstudents:students
    })
})
app.listen(9070,()=>{console.log("listening on 9070")})
