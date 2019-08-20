const mysql = require('mysql2');

const config = require('./my_db_config')
const connection = mysql.createConnection(config)

  connection.query(
    'create table if not exists products(id INT primary key auto_increment, name VARCHAR(100), image VARCHAR(100), price INT, description TEXT(400), categoryId INT)',
    function(err, results, fields) {
      console.log(err); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

  connection.query(
    'create table if not exists categories(id INT primary key auto_increment, genre VARCHAR(100))',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

  connection.query(
    'create table if not exists sellers(id INT primary key auto_increment, name VARCHAR(100), email VARCHAR(100))',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );


  // insert into categories(genre) VALUES("education")
  // insert into categories(genre) VALUES("education") VALUES("education") VALUES("education");

  // insert into products(name, image, price, description, categoryId) VALUES("Who Moved my Cheese", "https://images-na.ssl-images-amazon.com/images/I/71JpUaCKdrL.jpg", 100, "Who Moved My Cheese? An Amazing Way to Deal with Change in Your Work and in Your Life, published on September 8, 1998, is a motivational business fable. The text describes change in one's work and life, and four typical reactions to those changes by two mice and two little people, during their hunt for cheese.", 1);
  module.exports = connection
