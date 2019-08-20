require("ejs")
var connection = require("./database")
var express = require("express")
var bodyParser = require('body-parser')
var app = express()
app.set("view engine", "ejs")
bodyParser.json()
bodyParser.urlencoded({ extended: false })

// Route below
app.get("/", function(req, res){
    res.render("home")
})

app.get("/service", function(req,res){
    console.log("display service")
    res.render("service")
})


app.get("/team", function(req,res) {
    res.render("team")
})


app.get("/about",function(req,res){
    res.render("about")
    })


app.get("/form", function(req,res){
res.render("form")
})

app.post("/create_product",function(req,res){
 connection.query("insert into")
    res.render("home")
 req.body.email()
 req.body.name()
 req.body.productCategory()
 req.body.bookName()
 req.body.author()
 req.body.genre()
 req.body.description()
 req.body.image()
 req.body.price()
})

app.listen(3000, function(){
    console.log("Server Start")
})
