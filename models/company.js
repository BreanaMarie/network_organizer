var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CompanySchema= mongoose.Schema({
	companyName:String,
	companyCity:String,
	companyPhone:String,
	companyEmail:String,
	companyContact1:String,
	companyContact2:String,
	companyAddress:String,
	companyHotness:String,
	companyTime:String
});


var Company = mongoose.model('Company', CompanySchema);
module.exports=Company;