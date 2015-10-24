var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema= mongoose.Schema({
	user:String,
	email:String,
	passwordDigest:String,
});


UserSchema.statics.createSecure= function(user, email, password, callback){
	var newUser = this;
	bcrypt.genSalt(function(err, salt){
		bcrypt.hash(password, salt, function (err, hash){
			console.log(hash);
			newUser.create({
				user:user,
				email:email,
				passwordDigest:hash
			}, callback);	
		});
	});
};

// UserSchema.methods.valiPassword=function(password){
// 	return bcrypt.compareSync(password, this.local.password);
// };

var User = mongoose.model('User', UserSchema);
module.exports=User;