$(document).ready(function() {  
	  
	  if ($(window).width() <= 766) {
	  	$("button").show();
	  	$("a").css("display", "none");
	  	$("nav").css("display", "inline-block");
	  } else {
	  	$("button").hide();
	  	$("a").css("display", "inline-block");
	  }


	 $(window).resize(function() {
	  if ($(window).width() <= 766) {
	  	$("button").show();
	  	$("a").css("display", "none");
	  	$("nav").css("display", "inline-block");
	  } else {
	  	$("button").hide();
	  	$("a").css("display", "inline-block");
	  }
	 });


	$("button").click(function () {
	  if ($("a").is(":hidden")){
	  	$( "a" ).slideDown (300, function() {
	    });
	  	$("body").animate(
	  		{marginTop: 150}, 300, function() {
	  	});
	  } else {
	  	$( "a" ).slideUp (350, function() {
	    });
	  	$("body").animate(
	  		{marginTop: 30}, 350, function() {
	  	});
	 }
	});
});