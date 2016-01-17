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
	$('.about-me-container').hide();
	$('.back-button').hide();	

	$('.interest-title').hide();
	$('.interest-text').hide();

	$('.background-title').hide();
	$('.background-text').hide();

	$('.language-title').hide();
	$('.language-text').hide();

// Contact Page //
	$('.lb-5').hide();
	$('.contact-question-container').hide();
	$('.email-form-container').hide(); 


// Home Page //

	$('.lb-1').slideDown(800);
	$('.intro').delay(2000).fadeIn(1000);
	$('.what-do').delay(3000).fadeIn(1000);
	$('.lb-1').delay(5000).fadeOut(1500);
	$('.lb-2').delay(7000).fadeIn(100);
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
				$('.what-hear-holder').fadeOut(500, function() {
					$('.background-button').css('background-color', '#EEE')
					$('.about-me-container').fadeIn(500, function() {
						$('.background-title').fadeIn(500);
						$('.background-text').fadeIn(500);
						$('.back-button').delay(6000).fadeIn(500, function() {
							$('.back-button').on('click', function() {
								$('.about-me-container').fadeOut(500, function() {
									$('.background-text').hide();
									$('.background-title').hide(); 
									$('.back-button').hide();
									$('.what-hear-title').text('What would you like to hear about next?');
									$('.what-hear-holder').fadeIn(500);
									if (clickCount === 3) {
										$('.what-hear-container').hide();
										$('.what-hear-title').text("Enough about me, let's hear from you.")
										$('.lb-5').delay(500).fadeIn(500, function() {
										var scrollLocation3 = $('.lb-2').height() + $('.lb-3').height() + $('.lb-4').height();
										$('.lb-5').fadeIn(500, function() {
											$('html, body').animate({ scrollTop: $(".lb-5").offset().top }, 1000);
										});
									});
									};									
								});
							});
						});
					});
				});
			});
		
		$('.language-button').on('click', function() {
			clickCount += 1
			$('.what-hear-holder').fadeOut(function() {
				$('.about-me-container').fadeIn(500, function() {
					$('.language-button').css('background-color', '#EEE')
					$('.language-title').fadeIn(500);
					$('.language-text').fadeIn(500);
					$('.back-button').delay(6000).fadeIn(500, function() {
						$('.back-button').on('click', function() {
							$('.about-me-container').fadeOut(500, function() {
								$('.language-title').hide();
								$('.language-text').hide();
								$('.back-button').hide();
								$('.what-hear-title').text('What would you like to hear about next?');
								if (clickCount === 3) {
									$('.what-hear-container').hide();
									$('.what-hear-title').text("Enough about me, let's hear from you.")
									$('.lb-5').delay(500).fadeIn(500, function() {
										var scrollLocation3 = $('.lb-2').height() + $('.lb-3').height() + $('.lb-4').height();
										$('.lb-5').fadeIn(500, function() {
											$('html, body').animate({ scrollTop: $(".lb-5").offset().top }, 1000);
										});
									});
								};
								if (clickCount < 3) {
									$('.what-hear-holder').fadeIn(500);
								}
							});
						});
					});
				});
			});
		});		
		$('.interest-button').on('click', function() {
			clickCount += 1 
			$('.what-hear-holder').fadeOut(function() {
				$('.about-me-container').fadeIn(500, function() {
					$('.interest-button').css('background-color', '#EEE')
					$('.interest-title').fadeIn(500);
					$('.interest-text').fadeIn(500);
					$('.back-button').delay(6000).fadeIn(500, function() {
						$('.back-button').on('click', function() {
							$('.about-me-container').fadeOut(500, function() {
								$('.interest-title').hide();
								$('.interest-text').hide();
								$('.back-button').hide();
								$('.what-hear-title').text('What would you like to hear about next?');
								$('.what-hear-holder').fadeIn(500);
								if (clickCount === 3) {
									$('.what-hear-container').hide();
									$('.what-hear-title').text("Enough about me, let's hear from you.")
									$('.lb-5').delay(500).fadeIn(500, function() {
										var scrollLocation3 = $('.lb-2').height() + $('.lb-3').height() + $('.lb-4').height();
										$('.lb-5').fadeIn(500, function() {
											$('html, body').animate({ scrollTop: $(".lb-5").offset().top }, 1000);
										});
									});
								};
							});
						});
					});
				});
			});
		});		
	});
	});

	function checkClickCount() {

		if (clickCount === 3) {
			$('.what-hear-title').text("Enough about me, I want to hear from you.")
			$('.what-hear-container').hide()
		};

		if (clickcount === 1) {
			$('.what-hear-title').text('What would you like to hear about next?');
		};
		
	};

	// My Approach is text //

	changingText = function() {
		wordArray = ['Dynamic', 'User-Oriented', 'Passionate', 'Provocative']
		for (i = 0; i < wordArray.length; i++) { 
			$('.changing-text').delay(1000).text(wordArray[i]);
    	};
    };
 	
	setTimeout( changingText, 10000);

	$('.contact-button').on('click', function() {
		$(this).fadeOut(500, function() {
			$('.email-form-container').fadeIn(500);
		});
	})



});