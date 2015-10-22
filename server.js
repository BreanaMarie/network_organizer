console.log("server side JS is working");

//requirements
var express = require('express');
var app=express();
var path=require('path');
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
//load secrets
require('dotenv').load();

//configuration
app.set('view engine', 'ejs');
app.use('/static', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var db = require('./models/index.js');

//set api access variables
partnerId=process.env.partnerId;
key=process.env.key;

//set up where to render home page
app.get('/', function(req, res){
	res.render('index');
});

//set up where to render company create
app.get('/companycreate', function(req, res){
	res.render('companyCreate');
});

//connection to glassdoor api 
var glassDoorUrl = 'http://api.glassdoor.com/api/api.htm?v=1'+ //address to glassdors API
'&format=json'+ //format is JSON 
'&t.p=' + partnerId + //Partner ID used for access to glassdoor
'&t.k='+ key +// key used for access to glassdoor
'&action=employers'+//looking at employers
'&q=pharmaceuticals'+ //query  filled in by user, set variable here
'&userip=38.140.30.202'+ //my own ip make this a variable
'&useragent=Mozilla/%2F4.0';



//get information from form to be passed into glassdoor api


//get request to glassdoor api for business


//set preview on localy first
app.listen(3000, function(){
	console.log("listening on port 3000");
});