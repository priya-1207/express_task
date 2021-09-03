var express = require("express");
var app1=express();
var studentRoutes=require("./student.route")
var employeeRoutes=require("./employee.route")

app1.use(express.urlencoded({extended:true}));
app1.use(express.json());

app1.set('view engine', 'pug');
app1.set('views','./view');

app1.get("/",function(req,res){
    res.sendFile(__dirname + "/homepage.html");
})
app1.use("/student",studentRoutes)
app1.use("/employee",employeeRoutes)
app1.listen(9070,()=>{console.log("listening on 9070")})
