$(document).ready(function() {
    $(".js-textbox_input").attr('maxlength', '30');
    $("#btn-add").click(function(){
    	  var inputName = $("#addName").val().trim();
        if (inputName != "") {
          $("ol").append('<li><button id="btn-remove">X</button><p>'+inputName+"</p></li>");
          $("#addName").val("");
          $("#addName").focus();
        }
        else {
          alert("Input product name.");
        }
    });
    $(document).on('click', '#btn-remove', function () {
		    $(this).parent().remove();
	})
});
