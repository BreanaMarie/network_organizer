$(document).ready(function() {

//deal with even clicker after dom load
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


});