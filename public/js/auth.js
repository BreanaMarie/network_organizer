console.log("Sanity Check: JS is working for Auth!");

$(document).ready(function(){
//check if users is logged in
var currentName='';
function checkAuth() {
	$.get('/currentUser', function (data){
		console.log(data);
		if (data.user){
			currentName=data.user.name;
			$('.noUser').hide();
			$('.loggedIn').show();
			console.log(data.user.name + " is signed in");
			$('#welcome_message').html("<p>Welcome Back " + data.user.name + "</p>");
		}else{
			$('.noUser').show();
			$('.loggedIn').hide();
			console.log("there is no one signed in");
		}
	});
}
//check if there is a user logged on at every page load
checkAuth();

//handler for the log in form
$('#login').on('submit', function (e){
	e.preventDefault();
	var user = $(this).serialize();
	$.ajax({
			url:'/login',
			type:'POST',
			data: user
		})
		.done(function (data){
			console.log("user logged in");
			checkAuth();
			window.location.href = "profile";

		})
		.fail(function (data){
			console.log("failed to log in user");
		});
});

//handler for the logout button
$('#logout').on('click', function (e){
	e.preventDefault();
	$.get('/logout', function (data){
		console.log(data.msg);
		window.location.href = "/";	
	});
});

//event handler for sign up form add new user to database
$('#signup').on('submit', function (e){
	e.preventDefault();
	//console.log("form submitted");
	
		var userData = $(this).serialize();
		console.log(userData);

			$.ajax({
				url:'/users',
				type:'POST',
				data: userData
			})
			.done(function (data){
				console.log("created user");
				window.location.href = "profile";
				//hide sign up and login buttons	
				//checkAuth();
			})
			.fail(function (data){
				console.log("failed to create new user");
			});

});



});