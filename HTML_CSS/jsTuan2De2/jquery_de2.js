

$(document).ready(function() {
    var flipOn = $(".js-flip-on");
    var flipOff = $(".js-flip-off");
		flipOff.hide();
		var content = $(".menu li:nth-child(even)");
		content.hide();
		var btn_detail1 = $(".js-btn-detail1");
		var btn_detail2 = $(".js-btn-detail2");
		var popup1 = $(".js-popup1");
		var popup2 = $(".js-popup2");
		popup1.hide();
		popup2.hide();
		var popupClose = $(".js-popup__button-close");
// set pointer
		function pointer(str) {
        flipOff.css("pointer-events", str);
        flipOn.css("pointer-events", str);
    }
    // Set 
    function multiClick() {
        pointer("none");
        setTimeout(function() {
    			pointer("auto");
  				},
  				500);
    }
		// set animate flipOn
		flipOn.click(function() {
			/* Act on the event */
			multiClick();
			content.hide();
			content.animate({height: "0"}, 1);
			flipOn.show();
			flipOff.hide();
			$(this).parent().find(flipOn).hide();
		  $(this).parent().find(flipOff).show();
			$(this).parent().next().show();
			$(this).parent().next().animate({height: '157px'}, "500");
		});
		// set animate flipOff
		flipOff.click(function() {
			/* Act on the event */
      multiClick();
      $(this).hide();
      $(this).parent().find(flipOn).show();
      $(this).parent().next().animate(
      	{height: "0"}, "200").hide("fast");
		});
		// Show popup detail 1
		btn_detail1.click(function(event) {
			/* Show popup1 */
      popup1.show().animate({top:"50"}, "345")
		});
		// Show popup detail 2
		btn_detail2.click(function(event) {
			/* Show popup2*/
			popup2.show().animate({top:"50"}, "345")
		});
    popupClose.click(function(event) {
    	/* Close this popup */
      $(this).parent().hide().animate({top: "-400"}, "1");
    });
});
