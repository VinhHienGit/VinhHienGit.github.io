$(document).ready(function() {
    $(".js-textbox_input").attr('maxlength', '30');
    $(".js-btn-add").click(function(){
    	  var inputName = $(".js-textbox_input").val().trim();
        if (inputName != "") {
          $("ol").append('<li><button class=".js-btn-remove">X</button><p>'+inputName+"</p></li>");
          $(".js-textbox_input").val("");
          $(".js-textbox_input").focus();
        }
        else {
          alert("Input product name.");
        }
    });
    $(document).on('click', '.js-btn-remove', function () {
		    $(this).parent().remove();
	})
});
