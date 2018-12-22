$(document).ready(function() {

  	$( ".container" ).accordion({
  		header: ".shops", // designates which element is the header (the part that we can click on to collapse/expand each slide)
      	collapsible: true, // allows slides to collapse/expand
      	active: false, // makes sure that all slides are collapsed from the start
      	heightStyle: "content" // allows us to freely adjust size of each slide
      });

      $(".moto2").hover(function() {
        $(".moto2_text").fadeIn("slow").delay(5000).fadeOut("slow");
      });

      $(".moto3").hover(function() {
        $(".moto3_text").fadeIn("slow").delay(5000).fadeOut("slow");
      });

      $(".moto4").hover(function() {
        $(".moto4_text").fadeIn("slow").delay(5000).fadeOut("slow");
      });

  });
