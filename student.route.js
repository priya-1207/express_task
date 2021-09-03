var express = require("express");
var router=express.Router();

var students=[];
router.get("/studentregister",function(req,res){
    res.sendFile(__dirname + "/studentregister.html");
})

router.get("/studentlist",function(req,res){
    res.render("students",{
        allstudents:students
    })
})

router.post("/studregister",function(req,res){
    students.push(req.body);
    res.send("student registration successful")
})
module.exports=router;