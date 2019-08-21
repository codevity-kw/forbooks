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
    connection.query("select * from products", function(err, result){
               res.render("home", {
            products: result
        })
    })
    
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
    connection.query("Select * from categories", function(err,result){
        res.render("form",{categories: result})
    })
})


app.get("/search", function(req, res){
            connection.query(`select * from products where LCASE(name) LIKE "%${req.query.search.toLowerCase()}%" OR LCASE(description) LIKE "%${req.query.search.toLowerCase()}%"`, function(err, result){
        console.log('--->',result)
        res.render("home", {
            products: result
        })
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
