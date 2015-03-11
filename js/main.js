$(document).ready(function(){
	if (window.location.pathname == '/htd/'){
		$("#linkHome").toggleClass("active");
	};
	$(".handler").click(function(){
		$(".navUl").toggleClass("showing");
		console.log(this);
	});
});