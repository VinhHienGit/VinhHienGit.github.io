var username = $("#js-userName");
var password = $("#js-password");
var email = $("#js-email");
var birthday = $("#js-birthday");
var iconCalender = $(".js-icon_calender");
var calender = $(".js-calender");
var formInfo = $("#info__form");
var calenderDayOfMonth = $(".js-calender__DayOfMonth");
var submit = $(".js-info__form__button_submit");
var refresh = $(".js-info__form__button_refresh");

function validate_formInfo(){
	// body...
  return formInfo.valid({
    rules: {
      userName: {
        required: true,
        minlength: 8
      }, 
      passWord: {
        required: true,
        minlength: 8
      },
      email: {
        required: true,
        minlength: 8,
        email: true
      },
      birthday: {
        required: true,
        date: true
      },
    }, 
    messages: {
      userName: {
        required: "Username lenght min 8 letter",
        minlength: "Username lenght min 8 letter",
      }, 
      passWord: {
        required: "Password lenght min 8 letter",
        minlength: "Password lenght min 8 letter"
      },
      email: {
        required: "Please enter a valid email address.",
        email: "Email wrong format"
      },
      birthday: {
        required: "Please enter a valid date.",
        date: "Please enter a valid date."
      },
    },
  });
}

function hide_calender() {
  // body...
  calender.hide();
  calenderDayOfMonth.hide();
}
function show_calender() {
  // body...
  calender.show();
  calenderDayOfMonth.show();
}

