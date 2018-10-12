var arrow_left = $(".js-arrow_left");
var arrow_right = $(".js-arrow_right");
var slides_show = $(".js-slides_show");
var slides_thumb = $(".js-slides_thumbnail");
var thumbnail = slides_thumb.children("li");
var position = 0;
var distance = 0;
function pointer(event) {
  // set pointer-event
  arrow_left.css('pointer-events', event);
  arrow_right.css('pointer-events', event);
  thumbnail.css('pointer-events', event);
}
function multiClick() {
  // setTimeOut
  pointer('none');
  setTimeout(function(){pointer('auto');}, 500);
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
        if (distance === 0) {
          distance = -648 * (slides_show.children().length - 2);
        } else {
          distance += 1296;
        }
        slidesAnimation();
        thumbnailOpacity();
        multiClick();
        interval = slidesAnimationAuto();
    });

    arrow_right.click(function() {
      /* clear interval slide animation auto
        set pointer-event and timeOut
        show slide
        change thumbnail opacity
        run slide animatioin auto*/
        clearInterval(interval);
        slidesAnimation();
        thumbnailOpacity();
        multiClick();
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
        distance = -648 * ($(this).index() - 1);
        slidesAnimation();
        thumbnailOpacity();
        multiClick();
        interval = slidesAnimationAuto();
    });
});
