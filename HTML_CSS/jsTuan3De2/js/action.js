$(document).ready(function() {
  var load = function () {
    // load data page
    load_listMonth(selectMonth, selected_month);
    load_listYear(selectYear,FROM_YEAR, TO_YEAR, selected_year);
    load_dayOfMonth(tableDayOfMonth, selected_year, selected_month);
    hide_calender();
  };
  load();
  formInfo.validate({
    // cheack validate form info with jquery.validate.js libary
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
        dateISO: true
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
  preYear.click(function(event) {
    /* previous year by button preyear */
    btn_preYear();
  });
  nextYear.click(function(event) {
    /* next year by button next year */
    btn_nextYear();
  });
  preMonth.click(function(event) {
    /* prevous month by button premonth */
    btn_preMonth();
  });
  nextMonth.click(function(event) {
    /* next month by button next month */
    btn_nextMonth();
  });
  selectYear.change(function(event) {
    /* change year by select object */
    sltChange_year();
  });
  selectMonth.change(function(event) {
    /* change month by select object */
    sltChange_month();
  });
  var iconClick = 0;
  iconCalender.click(function(event) {
    /* show or hide calender */
    if (iconClick==0) {
      show_calender();
      iconClick = 1;
    }
    else {
      hide_calender();
      iconClick = 0;
    }
  });
  refresh.click(function(event) {
    /* refresh page */
    location.reload();
  });
});