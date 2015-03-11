$(document).ready(function(){
	$(".handler").click(function(){
		$(".navUl").toggleClass("showing");
		console.log(this);
	});
});