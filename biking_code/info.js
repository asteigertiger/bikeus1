$(document).ready(function() {

  	$(".container").accordion({
  		header: ".shops", // designates which element is the header (the part that we can click on to collapse/expand each slide)
      	collapsible: true, // allows slides to collapse/expand
      	active: false, // makes sure that all slides are collapsed from the start
      	heightStyle: "content" // allows us to freely adjust size of each slide
      });

      $(".cost").mouseenter(function() {
        $(".savings").delay(500).fadeOut();
        $(".numbers").delay(500).fadeIn();
      });

      $(".cost").mouseleave(function() {
        $(".savings").delay(500).fadeIn();
        $(".numbers").delay(500).fadeOut();
      });

      $(".estimate").click(function() {
      var one = ["2 steps a week", "40 miles a minute", "60 feet every 24 hours", "nowhere"];
      var two = ["a jet pack", "a skateboard", "their feet", "their mom's minivan", "their mind"];
      var three = ["attempt to fire their bosses", "inherit a CO2 cough", "punch random cars on the road", "can't find their shoes", "don't know how they got here"];
      var four = ["energized at 4am", "able to fall over at any moment", "capable of never sleeping", "into wrestling their own children"];

      		$(".one").html(one[Math.floor(Math.random() * one.length)]);
      		$(".two").html(two[Math.floor(Math.random() * two.length)]);
      		$(".three").html(three[Math.floor(Math.random() * three.length)]);
      		$(".four").html(four[Math.floor(Math.random() * four.length)]);
        });
  });
