$(document).ready(function() {

// Landing Page Flash //
	$('.lb-1').hide();
	$('.intro').hide();
	$('.what-do').hide();

// Home Page //
	$('.lb-2').hide();
	$('.navbar').hide();
	$('.item').hide();
	$('.my-approach-holder').hide();
	$('.arrow-1').hide();

// Projects Page //
	$('.lb-3').hide();
	$('.projects-container-1').hide();
	$('.projects-container-2').hide();
	$('.arrow-2').hide();
	$('.project-holder').hide();

// About Page //
	$('.lb-4').hide();
	$('.what-hear-holder').hide();
	$('.about-text-holder').hide();

		// Background Info //
		$('.b-1').hide();
		$('.b-2').hide();
		$('.b-3').hide();
		$('.b-4').hide();
		$('.b-5').hide();

		// Languages Info //
		$('.html').hide();
		$('.css').hide();
		$('.js').hide();
		$('.jquery').hide();
		$('.bootstrap').hide();
		$('.rails').hide();

		// Interests Info //

		$('.i-1').hide();
		$('.i-2').hide();
		$('.i-3').hide();
		$('.i-4').hide();
		$('.i-5').hide();

// Contact Page //
	$('.lb-5').hide();


// Home Page //

	$('.lb-1').slideDown(800);
	$('.intro').delay(2000).fadeIn(1000);
	$('.what-do').delay(3000).fadeIn(1000);
	$('.lb-1').delay(5000).fadeOut(1500);
	$('.lb-2').delay(6600).fadeIn(100);
	$('.navbar').delay(8000).fadeIn(1000);
	$('.item').delay(9000).fadeIn(200);
	$('.my-approach-holder').delay(9500).fadeIn(500);
	$('.arrow-1').delay(13000).fadeIn(500);

	// Scroll to Projects Page //

	$('.arrow-1').on('click', function() {
			var scrollLocation = $(window).height();
			$('.lb-3').fadeIn(500, function() {
				$('html, body').animate({
	    	scrollTop: $(".lb-3").offset().top
				}, 1000);
			$('.projects-container-1').delay(1000).fadeIn(500, function() {
				$('#p-1').fadeIn(1000);
				$('#p-2').delay(400).fadeIn(1000);
				$('#p-3').delay(800).fadeIn(1000);
				$('#p-4').delay(1200).fadeIn(1000, function() {
					$('.arrow-2').delay(2000).fadeIn(500);
				});
			});
		});
	});

	// Scroll to About Page //

	$('.arrow-2').on('click', function() {
		var scrollLocation2 = $('.lb-2').height() + $('.lb-3').height();
		$('.lb-4').fadeIn(500, function() {
				$('html, body').animate({ scrollTop: $(".lb-4").offset().top }, 1000);
		});
	});

	// About Page Interactive //

	$('.yes-button').on('click', function() {
		var clickCount = 0
		$(this).fadeOut(500, function() {
			$('.what-hear-holder').fadeIn(500);
			$('.background-button').on('click', function() {
				clickCount += 1
				$('.what-hear-holder').slideUp(500, function() {
						var background = $('#background')
						$('.background-button').hide();
						$('.what-hear-title').text('What would you like to hear about next?');
						$('#background').fadeIn(500, textFadeLoop(background) );
				});
			});

			$('.language-button').on('click', function() {
				clickCount += 1
				$('.what-hear-holder').slideUp(500, function() {
					var language = $('#language')
					$('.language-button').hide();
					$('.what-hear-title').text('What would you like to hear about next?');
					$('#language').fadeIn(500, textFadeLoop(language) );
				});
			});

			$('.interest-button').on('click', function() {
				clickCount += 1
				$('.what-hear-holder').slideUp(500, function() {
					var interest = $('#interest')
					$('.interest-button').hide();
					$('.what-hear-title').text('What would you like to hear about next?');
					$('#interest').fadeIn(500, textFadeLoop(interest) );
				});
			});
		});
	});

	function checkClickCount() {
		if (clickCount === 2) {
			$('.what-hear-title').text("Well, I guess there's only one option now!")
		};

		if (clickcount === 1) {
			$('.what-hear-title').text('What would you like to hear about next?');
		};
		
	};

	function textFadeLoop(param) {
		count = param.children('p').length;
		var incrementer = 0
		param.children('p').each(function( index ) {
			console.log(index);
			 $(this).delay(4000 * (index)).fadeIn(500).delay(3000).fadeOut(500, function() {
				 incrementer += 1
				 console.log(incrementer);
				 if (incrementer == count) {
				 	fadeInHolder();
			 	 }
			 }); 
		});
		console.log(count);
	};

	function fadeInHolder() {
		$('.what-hear-holder').fadeIn(500);
	}


	// My Approach is text //

	changingText = function() {
		wordArray = ['Dynamic', 'User-Oriented', 'Passionate', 'Provocative']
		for (i = 0; i < wordArray.length; i++) { 
			$('.changing-text').delay(1000).text(wordArray[i]);
    	};
    };
 	
	setTimeout( changingText, 10000);


});