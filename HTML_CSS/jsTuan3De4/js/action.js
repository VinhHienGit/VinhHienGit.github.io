var fallingLeaves = $(".js-falling_leaves");
var lengthRandom = fallingLeaves.width();
$(document).ready(function() {
  var count = 1;
  var move = 0;

  //create 16 falling leaves images
  for (let i = 0; i < 16; i++) {
    count = Math.ceil(Math.random()*5);
    fallingLeaves.append("<img src='img/leaves" + count + ".png' class='falling_leaves" + i + "' alt='leaves" + count +"'>");
  }

  //set action for every leaf per second
  setInterval(function() {
    let xStart = Math.ceil(Math.random() * lengthRandom);
    let xEnd = Math.ceil(Math.random() * lengthRandom);
    let xSkew = Math.ceil(Math.random() * 1000);
    let ySkew = Math.ceil(Math.random() * 1000);
    let time = Math.ceil(Math.random() * 25 + 5);

    TweenMax.fromTo($(".falling_leaves" + move), time, {
      x: xStart,
      y: 0,
    }, {
      x: xEnd,
      y: 750,
      skewX: xSkew,
      skewY: ySkew,
      rotation: 200,
    });
    move = move < 16 ? ++move : 0;
  }, 999);
});
