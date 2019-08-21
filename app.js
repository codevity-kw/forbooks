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

app.get("/test_delete", function(req, res){
    res.render("test_delete")
})

app.get("/product/delete/:id", function(req, res){
    var query = `delete from products where id= ${req.params.id}`
    console.log(req.params.id, query)

    connection.query(query, function(err, result){
        res.redirect("/")
    })
    
})

app.post("/product/update/:id", function(req, res){
    var query = `update products set name = ${req.body.name}, image = ${req.body.image}, price = ${req.body.price}, description = ${req.body.description}, categoryId = ${req.body.categoryId}`
        connection.query(query, function(err, result){
        res.redirect("/")
    })
    
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
