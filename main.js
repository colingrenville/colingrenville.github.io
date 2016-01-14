$(document).ready(function() {
	$('.lb-1').hide();
	$('.intro').hide();
	$('.what-do').hide();
	$('.lb-2').hide();
	$('.navbar').hide();
	$('.item').hide();
	$('.my-approach-holder').hide();
	$('.left-arrow').hide();
	$('.right-arrow').hide();
	$('.lb-3').hide();

	// Home Page //

	$('.lb-1').slideDown(800);
	$('.intro').delay(2000).fadeIn(1000);
	$('.what-do').delay(3000).fadeIn(1000);
	$('.lb-1').delay(5000).fadeOut(1500);
	$('.lb-2').delay(6500).fadeIn(100);
	$('.navbar').delay(8000).fadeIn(1000);
	$('.item').delay(9000).fadeIn(200);
	$('.my-approach-holder').delay(9500).fadeIn(500);
	$('.left-arrow').delay(13000).fadeIn(500);
	$('.right-arrow').delay(13000).fadeIn(500);

	$('.right-arrow').on('click', function() {
			var scrollLocation = $(window).height();
			$('.lb-3').fadeIn(500, function() {
			$('html, body').animate({
    	scrollTop: $(".lb-3").offset().top
			}, 1000);
			$('a.active').css('color', '#777');
		});
	});

	changingText = function() {
		wordArray = ['Dynamic', 'User-Oriented', 'Passionate', 'Provocative']
		for (i = 0; i < wordArray.length; i++) { 
			$('.changing-text').delay(1000).text(wordArray[i]);
    };
  };



	setTimeout( changingText, 10000);


	// About Me //



	// Work //

	// Contact //




});