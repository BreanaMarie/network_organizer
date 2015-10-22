var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CompanySchema= mongoose.Schema({
	name:String
});


var Company = mongoose.model('Company', CompanySchema);
module.exports=Company;