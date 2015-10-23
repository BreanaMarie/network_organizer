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

//create an event handler for the delete button
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


});