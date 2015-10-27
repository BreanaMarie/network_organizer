var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var CompanySchema= mongoose.Schema({
	name:String,
	address:String,
	city:String,
	phone:String,
	email:String,
	createdAt:String,
	hotness: String,
	status:String,
	user : { type: String, ref: 'User' }
});


var Company = mongoose.model('Company', CompanySchema);
module.exports=Company;