var express = require("express");
var router=express.Router();
var employees=[];
router.get("/employeeregister",function(req,res){
    res.sendFile(__dirname + "/employeeregister.html");
})

router.get("/employeelist",function(req,res){
    res.render("employees",{
        allemployees:employees
    })
})

router.post("/empregister",function(req,res){
    employees.push(req.body);
    res.send("employee registration successful")
})
module.exports=router;