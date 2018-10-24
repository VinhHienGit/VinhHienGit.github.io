var img = $(".js-img");
var bird = $(".js-bird");
var cloudsHead = $(".js-clouds_head");
var cloudsBelow = $(".js-clouds_below");
var bird_speed = 0.1;
var cloudsHead_speed = 0.1;
var cloudsBelow_speed = 0.2;
function move(x) {
  // body...
    bird.animate({left:bird_speed*x/2}, 0);
    cloudsHead.animate({left:cloudsHead_speed*x/2}, 0);
    cloudsBelow.animate({left:cloudsBelow_speed*x/2}, 0);
}
$(document).ready(function() {
  img.mousemove(function(event) {
    /* Act on the event */
    move(event.pageX);
  });
});