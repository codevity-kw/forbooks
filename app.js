require("ejs")
var express = require("express")

var app = express()

app.set("view engine", "ejs")

// Route below
app.get("/", function(req, res){
    res.render("home")
})

app.get("/service", function(req,res){
    res.render("service")
})

app.listen(3000, function(){
    console.log("Server Start")
})