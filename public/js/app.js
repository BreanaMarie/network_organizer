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

//event handler for the delete button remove from database from businesses page
$('#companyProfile').on('click', 'button.close', function (e){
	e.preventDefault();
	var profileId =$(this).data().id;
	//console.log(profileId);
	var deleteProfile =$(this).closest('div.card');
		$.ajax({
			url:'companies/'+ profileId,
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

//event handler for the delete button remove from database from company profile page
//added windows alert to user communicating delte and redirect to businesses page
$('#company_profile').on('click', 'button.close', function (e){
	e.preventDefault();
	var profileId =$(this).data().id;
	//console.log("profile id is: ", profileId);
	var deleteProfile =$(this).closest('div');
		$.ajax({
			url: profileId,
			type: 'DELETE',
		})
		.done(function (data){
			console.log(data);
			$(deleteProfile).remove();
			console.log("this company has been removed from your profile");
			alert("This Company has been deleted");
			window.location.href="/businesses";
		})
		.fail(function (data){
			console.log("This company could not be deleted from your profile");
		});
});

//event handler if button is clicked redirect to that company's profile 
//from user profile page
$('#headlines').on('click', '.view_co', function (e){
	e.preventDefault();
	//console.log('co button clicked');
	var object = $(this).data();
	var redirectid = object.id;
	//console.log(redirectid);
	$.ajax({
		url:'/companies/'+ redirectid,
		type: 'GET',
	})
	.done(function (data){
		//console.log(data);
		console.log("successful redirect");
		window.location.href="/companies/" + redirectid;
	})
	.fail(function (data){
		console.log("failed to redirect");
	});
});

//event handler if button is clicked redirect to that company's profile
//from businesses page
$('#companyProfile').on('click', 'button.view_co', function (e){
	e.preventDefault();
	console.log('co button clicked');
	var object =$(this).data();
	var redirectid = object.id;
	$.ajax({
		url:'/companies/'+ redirectid,
		type: 'GET',
	})
	.done(function (data){
		//console.log(data);
		console.log("successful redirect");
		window.location.href="/companies/" + redirectid;
	})
	.fail(function (data){
		console.log("failed to redirect");
	});
});

function editViews (edit){
	$('.profile').show();
	$('.editing').hide();
}

editViews();
// handler for company edit profile button when clicked display edit fields
$('#company_profile').on('click', '.profile', function (e){
	e.preventDefault();
	console.log('the edit button clicks');
	$('.profile').hide();
	$('.editing').show();
});

//handler for company cancel button changes, display fields back to profile
$('#company_profile').on('click', '.cancel', function (e){
	e.preventDefault();
	console.log('the cancel button clicks');
	$('.profile').show();
	$('.editing').hide();
});

//handler for the save button on editing profile
$('#company_profile').on('submit', function (e){
	e.preventDefault();
	console.log("the save button clicks");

	var formData = $(this).serialize();
	//console.log(formData);

		$.ajax({
			url:'/companies',
			type:'PUT',
			data: formData
		})
		.done(function (data){
			console.log("company has been updated");
			$('.profile').show();
			$('.editing').hide();
			location.reload();

		})
		.fail(function (data){
			console.log("failed to update company");
		});
});


});



