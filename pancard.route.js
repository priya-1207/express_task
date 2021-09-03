var express = require("express");
var router=express.Router();
var pancard=[];
router.get("/pancardregister",function(req,res){
    res.sendFile(__dirname+"/pancardregister.html");
})
router.get("/pancardlist",function(req,res){
    res.render("pancard",{
        allpancard:pancard
    })
})
router.post("/panreg",function(req,res){
    pancard.push(req.body);
    res.send("pancard registration successful")

})
module.exports=router;

