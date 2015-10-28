console.log("the validation form is connected");

$(document).ready(function(){
//form validation for new user, to confirm password matches
$('#signup').validate({
    rules: {
    	name:{
    		required:true,
    		minlength:2
    	},
    	email:{
    		required:true,
    		email:true
    	},
        password:{
        	required:true,
            minlength : 5
        },
        confirm : {
        	required:true,
            minlength : 5,
            equalTo : "#password"
        }
    },
    messages:{
    	name:{
    		required:"Please enter your name",
    		minlength:"your user name must consit of 2 characters or more"
    	},
        password:{
        	required:"you must enter a password",
        	minlength:"Your password must be more than 5 characters"
        },
        confirm:{
            required: "You must confirm your password",
            minlength: "Your password must contain more than 5 characters",
            equalTo: "Your Passwords Must Match" 
        }
    }
});


//form validation for new company
//form validation for new user, to confirm password matches
$('#companyCreate').validate({
    rules: {
        name:{
            required:true,
            minlength:2
        },
        email:{
            email:true
        },
    },
    messages:{
        name:{
            required:"Please enter your name",
            minlength:"your user name must consit of 2 characters or more"
        },

    }
});

});