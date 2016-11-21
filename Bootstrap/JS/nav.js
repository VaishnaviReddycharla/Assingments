$(document).ready(function(){
	console.log("hello");
	$.get("../Templates/nav.html", function(data){
	console.log("hello");
    $("#nav-placeholder").replaceWith(data);
});

});