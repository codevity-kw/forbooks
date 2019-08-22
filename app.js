require("ejs")
var connection = require("./database")
var express = require("express")
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000;

app.set("view engine", "ejs")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Route below
app.get("/", function(req, res){
    connection.query("select * from products", function(err, result){
        console.log(err)
        console.log(result)
        if(req.query.lang=="ar"){
            res.render("home_arabic", {
                products: result
            })
        }  else{
            res.render("home", {products: result})
        }
   
    })
    
})
app.get("/dashboard/:id", function(req,res){
    connection.query(`select * from products where sellerId = ${req.params.id}`, function(err, result){
        res.render("dashboard", {products: result})
    })
})

app.get("/test_delete", function(req, res){
    res.render("test_delete")
})

app.get("/products/delete/:id", function(req, res){
    var query = `delete from products where id= ${req.params.id}`
    console.log(req.params.id, query)

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
var query = `insert into products(name,description,categoryId,image,price) Values ("${req.body.bookName}", "${req.body.description}", ${req.body.productCategory},"${req.body.image}",${req.body.price})`
    connection.query(query,function(error,result){
        console.log(error, query )
        res.redirect("/")
    })
})

app.post("/products/update/:productId",function(req,res){
    var query = `update products set name="${req.body.bookName}",description="${req.body.description}",categoryId=${req.body.productCategory},image='${req.body.image}',price=${req.body.price} WHERE id="${req.params.productId}"`
        connection.query(query,function(error,result){
            console.log(error, query )
            res.redirect("/")
        })
    })

app.get("/products/edit/:productId",function (req,res){
    connection.query(`select * from products where id="${req.params.productId}"`, function(err,resultproduct){
        connection.query("Select * from categories", function(err,resultcategories){
            res.render("edit",{
                product: resultproduct[0],
                categories: resultcategories
           })
        })
       
    })
 })

    // "select * from products where id = req.params.id", err, result
    // product = result[0]
    // res.render()



app.listen(port, function(){
    console.log("Server Start")
})
