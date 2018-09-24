var express = require('express');
var path = require('path');
var mongojs = require('mongojs');

// set mongojs
var db = mongojs('books',['newbooks']);
// init app
var app = express();

// set the views
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// set public
app.use(express.static(path.join(__dirname,'public')));
// homepage route
app.get('/',function(req,res){
res.render('homepage');
});

// add new books
app.get('/book/add',function(req,res){
res.render('add_book');
});
app.listen(3004,function(){
    console.log('server started at port 3004');
});