var express = require("express");
var router=express.Router();
var aadhar=[];
router.get("/aadharregister",function(req,res){
    res.sendFile(__dirname+"/aadharcardregister.html");
})
router.get("/aadharlist",function(req,res){
    res.render("aadhar",{
        allaadhar:aadhar
    })
})

router.post("/aadharreg",function(req,res){
    aadhar.push(req.body);
    res.send("aadhar registration successful")
})
module.exports=router;
