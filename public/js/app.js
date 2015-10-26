console.log("Sanity Check: JS is working!");

$(document).ready(function(){


//date converter function
function datechange(dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    var date = month + "/" + day + "/" + year;

    return date;
}

// handler for company create form with add to database
$('#companyCreate').on('submit', function (e){
	e.preventDefault();
	console.log("the button clicks");

	 var dateTime= new Date();
	 $('#createdAt').attr('value', datechange(dateTime));

	var formData = $(this).serialize();
	console.log(formData);

		$.ajax({
			url:'/companies',
			type:'POST',
			data: formData
		})
		.done(function (data){
			console.log("created company");
			window.location.href = "businesses";

		})
		.fail(function (data){
			console.log("failed to create company");
		});
});

//event handler for the delete button remove from database
$('#companyProfile').on('click', 'button.close', function (e){
	e.preventDefault();
	var profileId =$(this).data().id;
	var deleteProfile =$(this).closest('div');
		$.ajax({
			url:'/companies/'+ profileId,
			type: 'DELETE',
		})
		.done(function (data){
			console.log(data);
			$(deleteProfile).remove();
			console.log("this company has been removed from your profile");
		})
		.fail(function (data){
			console.log("This company could not be deleted from your profile");
		});
});


$('#headlines').on('click', 'button.view_co', function (e){
	e.preventDefault();
	console.log('co button clicked');
	console.log($this);
	//window.location.href = "businesses";
});


});



