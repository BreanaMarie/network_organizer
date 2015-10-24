console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// handler for company create form with add to database
$('#companyCreate').on('submit', function(e){
	e.preventDefault();
	//console.log("the button clicks");

	 var dateTime= new Date();
	 $('#timeSubmit').attr('value', dateTime);

	var formData = $(this).serialize();
	console.log(formData);

		$.ajax({
			url:'/companies',
			type:'POST',
			data: formData
		})
		.done(function(data){
			console.log("created company");
			window.location.href = "businesses";

		})
		.fail(function(data){
			console.log("failed to create company");
		});
});

//event handler for the delete button remove from database
$('#companyProfile').on('click', 'button.close', function(e){
	e.preventDefault();
	var profileId =$(this).data().id;
	var deleteProfile =$(this).closest('li');
		$.ajax({
			url:'/companies/'+ profileId,
			type: 'DELETE',
		})
		.done(function(data){
			console.log(data);
			$(deleteProfile).remove();
			console.log("this company has been removed from your profile");
		})
		.fail(function(data){
			console.log("This company could not be deleted from your profile");
		});
});

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

//event handler for sign up form add new user to database
$('#signup').on('submit', function(e){
	e.preventDefault();
	console.log("form submitted");
	
		var userData = $(this).serialize();
		console.log(userData);

			$.ajax({
				url:'/users',
				type:'POST',
				data: userData
			})
			.done(function(data){
				console.log("created user");
				//window.location.href = "businesses";

			})
			.fail(function(data){
				console.log("failed to create new user");
			});

});



});



