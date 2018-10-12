$(document).ready(function() {
    $(".js-name").attr('maxlength', '30');
    $(".js-add").click(function(){
        var inputName = $(".js-name").val().trim();
        if (inputName != "") {
          $("ol").append('<li><button id="btn-remove">X</button><p>'+inputName+"</p></li>");
          $(".js-name").val("");
          $(".js-name").focus();
        }
        else {
          alert("Input product name.");
        }
    });
    $(document).on('click', '#btn-remove', function () {
        $(this).parent().remove();
  })
});
