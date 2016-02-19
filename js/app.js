$(function(){

$("#play").mouseenter(function(){
	$(this).velocity( { translateY: "-10px", backgroundColor: "#FF7376" }, 400 );
});

$("#play").mouseleave(function(){
	$(this).velocity( { translateY: "0", backgroundColor: "#FF2C2E" }, 200 );
});

$("#play").mousedown(function(){
	$(this)
		.velocity({ translateY: "-30px", rotateZ: "10deg" }, 100, "easeOut")
		.velocity({ rotateZ: "-8deg" }, 150)
		.velocity({ translateY: "0", rotateZ: "0" }, {duration: 600, easing: [ 500, 14 ]});
});

});