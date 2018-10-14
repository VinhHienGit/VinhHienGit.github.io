var arrow_left = $(".js-arrow_left");
var arrow_right = $(".js-arrow_right");
var menu_title = $(".js-menu_title");
var menu_slide = $(".js-menu_slide");
var title = menu_title.children();
var position = 0;
var distance = 0;
function pointer(event) {
	// set pointer-event
  arrow_left.css('pointer-events', event);
  arrow_right.css('pointer-events', event);
  menu_title.css('pointer-events', event);
}
function multiClick() {
	// setTimeOut
	pointer('none');
	setTimeout(function(){pointer('auto');}, 500);
}
function menuTitle() {
  // body...
  title.hide();
  position = Math.abs(distance) / 320;
  title.eq(position).show();
}
function slidesAnimation(speed) {
	// slide animate
	distance -= 320;
	if (distance < (-320 * (menu_slide.children().length - 1))) {
    distance = 0;
  }
  menu_slide.animate({left: distance + "px"}, speed);
  menuTitle();
  multiClick();
  title.css('pointer-events', 'none');
}
function slidesAnimationAuto(argument) {
	// slides animation auto
	var interval = setInterval(function() {
    slidesAnimation(500);
  }, 2000);
  return interval;
}

$(document).ready(function() {
    // 
    menuTitle();
    let interval = slidesAnimationAuto();

    arrow_left.click(function() {
    	/*clear interval slide animation auto
    	  set pointer-event and timeOut
    	  set new distance
    	  show slide
    	  change thumbnail opacity
    	  run slide animatioin auto*/
    	  clearInterval(interval);
        if (distance === 0) {
          distance = -320 * (menu_slide.children().length - 2);
        } else {
          distance += 640;
        }
        slidesAnimation(300);
        interval = slidesAnimationAuto();
    });

    arrow_right.click(function() {
    	/* clear interval slide animation auto
    	  set pointer-event and timeOut
    	  show slide
    	  change thumbnail opacity
    	  run slide animatioin auto*/
    	  clearInterval(interval);
        slidesAnimation(100);
        interval = slidesAnimationAuto();
    });

    menu_title.click(function() {
    	/**/
    	  title.show();
        clearInterval(interval);
        menu_title.css('pointer-events', 'none');
        title.css('pointer-events', 'auto');
    });

    title.click(function(event) {
      /* Act on the event */
        clearInterval(interval);
        distance = -320*($(this).index()-1);
        slidesAnimation(100);
        interval = slidesAnimationAuto();
        menu_title.css('pointer-events', 'auto');
        title.css('pointer-events', 'none');
        event.stopPropagation();
    });
});
