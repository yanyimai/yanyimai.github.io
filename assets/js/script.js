$(document).ready(function() {

$("#button1").click(function() {
	(this).Hide(300); // jQuery Function Number 1//
 	});

$("nav-bar").css("background-color", "white"); //jQuery Function Number 2//

$("#button1").click(function({
	(this).AddClass(".lipstick1")
}); //jQuery Function Number 3//


$("#button2").click(function(){
    var x = $("selection").position();
    alert("Top: " + x.top + " Left: " + x.left);
}); //jQuery Function Number 4//

$("#button3").click(function(){
    $("img").attr("width","250");
});//jQuery Function Number 5

$("#button4").mouseover(function(){
    $("img").css("opacity", "1");
}); //jQ Function Number 6//