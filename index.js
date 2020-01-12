function handleSlides() {
    $('#menu-button').click(function(e){
		e.stopPropagation();
		if($('body').hasClass('opened-menu')) closeMobileNav();
		else openMobileNav();
    });
    
    if($('.slideshow').length>0){
	homeSlideshow =	$('.slideshow').cycle({
	    slides: "> .slide",
	    speed: 3600,
	    manualSpeed:500,
	    timeout: 4000,
	    fx: 'fadeout',
	    delay: 0,
	    paused:true,
	    next:$('.slideshow')
	});

	$('#slide1 img').imagesLoaded()
	    .done( function( instance, image ) {
		$('.slideshow').addClass('started');
	    });
	$('#slide2 img').imagesLoaded()
	    .done( function( instance, image ) {
		homeSlideshow.cycle('resume');
	    });
    }
}

function openMobileNav(delayDur){
    $('.mobile-nav').delay(delayDur?delayDur:0).slideDown(500);
    $('#menu-button').addClass('active');
    $('body').addClass('opened-menu');
}

function closeMobileNav(delayDur){
    $('.mobile-nav').delay(delayDur?delayDur:0).slideUp(200);
    $('#menu-button').removeClass('active');
    $('body').removeClass('opened-menu');
}

$(handleSlides);
