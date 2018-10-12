var arrow_left = $(".js-arrow_left");
var arrow_right = $(".js-arrow_right");
var slides_show = $(".js-slides_show");
var slides_thumb = $(".js-slides_thumbnail");
var thumbnail = slides_thumb.children("li");
var position = 0;
var distance = 0;
function pointer(event) {
	// set pointer-event
  arrow_left.css("pointer-event", event);
  arrow_right.css("pointer-event", event);
  thumbnail.css("pointer-event", event);
}
function multiClick() {
	// setTimeOut
	pointer("none");
	setTimeout(pointer("auto"), 456);
}
function thumbnailOpacity() {
	// set opacity for thumbnail
	thumbnail.css('opacity', '');
  position = Math.abs(distance) / 648;
  thumbnail.eq(position).css({opacity: "0.5"});
}
function slidesAnimation() {
	// slide animate
	distance -= 648;
	if (distance < (-648 * (slides_show.children().length - 1))) {
    distance = 0;
  }
  slides_show.animate({left: distance + "px"}, 500);
}
function slidesAnimationAuto(argument) {
	// slides animation auto
	var interval = setInterval(function() {
    slidesAnimation();
    thumbnailOpacity();
  }, 2000);
  return interval;
}

$(document).ready(function() {
    // 
    thumbnailOpacity();
    let interval = slidesAnimationAuto();

    arrow_left.click(function() {
    	/*clear interval slide animation auto
    	  set pointer-event and timeOut
    	  set new distance
    	  show slide
    	  change thumbnail opacity
    	  run slide animatioin auto*/
    	  clearInterval(interval);
        multiClick();
        if (distance === 0) {
          distance = -648 * (slides_show.children().length - 2);
        } else {
          distance += 1296;
        }
        slidesAnimation();
        thumbnailOpacity();
        interval = slidesAnimationAuto();
    });

    arrow_right.click(function() {
    	/* clear interval slide animation auto
    	  set pointer-event and timeOut
    	  show slide
    	  change thumbnail opacity
    	  run slide animatioin auto*/
    	  clearInterval(interval);
        multiClick();
        slidesAnimation();
        thumbnailOpacity();
        interval = slidesAnimationAuto();
    });

    thumbnail.click(function() {
    	/* clear interval slide animation auto
    	  set pointer-event and timeOut
    	  set new distance
    	  show slide
    	  change thumbnail opacity
    	  run slide animatioin auto*/
    	  clearInterval(interval);
        multiClick();
        if ($(this).index() !== 0) {
          distance = -648 * ($(this).index() - 1);
        } else {
          distance = 648;
        }
        slidesAnimation();
        thumbnailOpacity();
        interval = slidesAnimationAuto();
    });
});
