require("ejs")
var connection = require("./database")
var express = require("express")
var bodyParser = require('body-parser')
var app = express()
app.set("view engine", "ejs")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

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
    connection.query("Select * from categories", function(err,result){
        res.render("form",{categories: result})
    })
})

app.post("/create_product",function(req,res){
var query = `insert into products(name,description,categoryId) Values ("${req.body.bookName}", "${req.body.description}", ${req.body.productCategory},${req.body.image()},${req.body.price()})`
    connection.query(query,function(error,result){
        console.log(error, query )
        res.redirect("/")
    })
})

app.listen(3000, function(){
    console.log("Server Start")
})
