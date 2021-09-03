var express=require("express");
var app2=express();
var aadharRoutes=require("./aadhar.route")
var pancardRoutes=require("./pancard.route")

app2.use(express.urlencoded({extended:true}));
app2.use(express.json());

app2.set('view engine', 'pug');
app2.set('views','./view');

app2.get("/",function(req,res){
    res.sendFile(__dirname+"/home1.html")
})
app2.use("/aadhar",aadharRoutes)
app2.use("/pancard",pancardRoutes)
app2.listen(9070,()=>{console.log("listening on 9070")})