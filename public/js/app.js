console.log("Sanity Check: JS is working!");

$(document).ready(function(){

//create a handler for company create form and add to database
$('#companyCreate').on('submit', function(e){
	e.preventDefault();
	console.log("the button clicks");
	//create a timestamp 
	var dateTime= new Date();
	$('#timeSubmit').attr('value', dateTime);

	var company =$('#companyCreate').serialize();
	$.post('/companies', company, function(data){
		console.log(data);

	});

	// var formData = $(this).searilized();
	// console.log(formData);

	// 	$.ajax({
	// 		url:'/companys',
	// 		type:'POST',
	// 		data: formData
	// 	})
	// 	.done(function(data){
	// 		console.log("created company");
	// 	});
});



});