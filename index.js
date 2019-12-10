function handleSlides() {
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

$(handleSlides);
