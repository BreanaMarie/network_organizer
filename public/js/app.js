console.log("Sanity Check: JS is working!");

$(document).ready(function(){

//create a handler for company create form and add to database
$('#companyCreate').on('submit', function(e){
	e.preventDefault();
	console.log("the button clicks");
	//create a timestamp 
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



});