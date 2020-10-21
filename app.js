const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.listen(3000, function() {
    console.log("Server started on port 3000");
});

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'JCWMH'
});

app.get('/',function(req,res){
  res.render('homePage');
});

app.get('/about-me',function(req,res){
  res.render('about');
});

app.get('/porfolio',function(req,res){
  res.render('porfolio');
});

app.get('/contact-me',function(req,res){
  res.render('contact');
});