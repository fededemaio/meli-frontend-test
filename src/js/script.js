$(document).ready(function(){
	var carousel = $(".myCarousel").carousel({"pagination": true});
	var zoom = $('.zoom').zoom().loadImage()
	var modal = $("button").modal({
    "content": "¡Disculpas! Esta es solo una versión de evaluación.",
    "width": "500px",
    "height": 350,
    "cache": false,
    "closable": true
});
});