var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema= mongoose.Schema({
	name:String,
	email:{type: String, unique:true},
	passwordDigest:String,
});

//function to take password, salt and hash it before saving into the database
UserSchema.statics.createSecure= function(name, email, password, callback){
	var newUser = this;
	bcrypt.genSalt(function(err, salt){
		bcrypt.hash(password, salt, function (err, hash){
			console.log(hash);
			newUser.create({
				name:name,
				email:email,
				passwordDigest:hash
			}, callback);	
		});
	});
};

//compairs the email entered with those saved on the database, 
//if it finds one check the password matches, or reject email 
UserSchema.statics.authenticate= function (email, password, callback){
	this.findOne({email: email}, function (err, user){
		console.log(user);
		if(!user){
			callback('No User with email ' + email, null);
		}else if (user.checkPassword(password)){
			callback(null, user);
		}
	});
};

//checks password entered matches the password on the database
UserSchema.methods.checkPassword = function (password){
	return bcrypt.compareSync(password, this.passwordDigest);
};

var User = mongoose.model('User', UserSchema);
module.exports=User;

