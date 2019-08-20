const mysql = require('mysql2');

const config = require('my_db_config')
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
  module.exports = connection