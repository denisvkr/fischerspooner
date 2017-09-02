$(document).ready(function() {
  
	  
	  if ($(window).width() <= 766) {
	  	$("button").show();
	  	$("a").css("display", "none");
	  	$("nav").css("display", "inline-block");
	  	
	  } else {
	  	
        $("button").hide();
	  	$("a").css("display", "inline-block");
	  	

	  	// $("a").hide();
	  	// $("a").removeClass("showlinks");
	  	// $("a").removeClass();
	  }
	 // });

	 $(window).resize(function() {
	  if ($(window).width() <= 766) {
	  	$("button").show();
	  	$("a").css("display", "none");
	  	$("nav").css("display", "inline-block");
	  	// $("a").hide();
	  	// $("a").addClass("showlinks");
	  	// $("a").addClass("showlinks");
	  } else {
	  	$("button").hide();

	  	$("a").css("display", "inline-block");
	  	// $("a").show();
	  	// $("a").addClass("showlinks");
	  	// // $("a").removeClass("showlinks");
	  	// $("a").removeClass();
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