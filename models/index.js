//connect all the models here

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pavement');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function (callbaack){
	console.log("Pavement db is open for business");
});

module.exports.Company = require('./company.js');
module.exports.User= require('./user.js');