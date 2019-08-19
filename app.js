require("ejs")
var express = require("express")

var app = express()

app.set("view engine", "ejs")
app.get("/about",function(req,res){
res.render("about")
}
)

app.listen(3000, function(){
    console.log("Server Start")
})