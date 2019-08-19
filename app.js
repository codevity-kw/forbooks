require("ejs")
var express = require("express")

var app = express()

app.set("view engine", "ejs")





app.get("/team", function(req,res) {
    res.render("team")
})


app.listen(3000, function(){
    console.log("Server Start")
})
