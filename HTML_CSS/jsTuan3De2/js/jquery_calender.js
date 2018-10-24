
var toDay = new Date();
var selected_date = parseInt(toDay.getDate());
var selected_month = toDay.getMonth();
var selected_year = toDay.getFullYear();
var preYear = $(".js-calender__button_PreYear");
var nextYear = $(".js-calender__button_NextYear");
var preMonth = $(".js-calender__button_PreMonth");
var nextMonth = $(".js-calender__button_NextMonth");
var selectMonth = $(".js-calender__select_month");
var selectYear = $(".js-calender__select_year");
var tableDayOfMonth = $(".js-calender__DayOfMonth");
const FROM_YEAR = 1900;
const TO_YEAR = toDay.getFullYear();
function load_listMonth(element, selectedMonth) {
	// load select object month data
  element.children().remove();
	var selected = "";
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "Semtemper", "October", "November", "December",];
  for (var i = 0; i < 12; i++) {
    selected = (i==selectedMonth) ? "selected" : "";
    var htm = "<option value='"+(i+1)+"'"+selected+">"+month[i]+"</option>";
    element.append(htm);
  }
}
function load_listYear(element, fromYear, toYear, selectedYear) {
  // load select object year data
  element.children().remove();
  var selected = "";
  var htm = "";
  for (var year = FROM_YEAR; year <= TO_YEAR; year++) {
    selected = (year==selectedYear) ? "selected" : "";
    htm = "<option value='"+year+"'"+selected+">"+year+"</option>";
    element.append(htm);
  }
}
function check_toDay(date) {
	// body...
	if (date.getFullYear() == toDay.getFullYear() 
		&& date.getMonth() == toDay.getMonth()
		&& date.getDate() == toDay.getDate()) {
    return true;
	}
  return false;
}

function load_dayOfMonth(table, year, month) {
	/*load day of month into table*/
  table.children().remove();

  var num_dayOfMOnth = function () {
  	// return date of month
  	if (month != 2 && (month % 2 != 0) && month != 9 && month != 11 || month == 12 || month == 8 || month == 10) return 31;
		else if (month == 2) return 28;
		else return 30;
  }
  var afterToDay = 0;
  var countDayOfMonth = 1;
  var htm = "";
  var date = new Date(year, month, countDayOfMonth);
  var day = date.getDay();
  while(countDayOfMonth<=num_dayOfMOnth()) {
  	htm = "<tr>"
  	for (var i = 0; i < 7; i++) {
      date = new Date(year, month, countDayOfMonth);
      day = date.getDay();
      if(i==day && countDayOfMonth <= num_dayOfMOnth()) {
        if(check_toDay(date)) {
        	htm += "<td class='js-date' id='calender__DayOfMonth__toDay' style='background: powderblue;'>"+countDayOfMonth+"</td>";
          afterToDay = 1;
        }
        else {
          if (afterToDay == 1) {
            htm += "<td>"+countDayOfMonth+"</td>";
          }
          else {
            htm += "<td class='js-date'>"+countDayOfMonth+"</td>";
          }
        }
        countDayOfMonth++;
      }
      else {
      	htm += "<td id='calender__DayOfMonth__notDayOfMonth'></td>";
      }
  	}
  	htm += "</tr>";
  	table.append(htm);
  }
}

function change_selected(ChMonth, ChYear) {
  // body...
  selected_year = ChYear;
  selected_month = ChMonth;
}
// -------------------------------select calender--------------
window.sltChange_month = function () {
  /* Act on the event */
  change_selected(selectMonth.val(), selected_year);
  load_dayOfMonth(tableDayOfMonth, selected_year, selected_month);
}
window.sltChange_year = function sltChange_year() {
  /* Act on the event */
  change_selected(selected_month, selectYear.val());
  load_dayOfMonth(tableDayOfMonth, selected_year, selected_month);
}
// --------------------------------Button calender----------------------------
function btn_nextYear() {
  // body...
  if(selected_year<TO_YEAR) {
    change_selected(selected_month, parseInt(selected_year) + 1);
  }
  else {
    change_selected(selected_month, parseInt(selected_year) + 0);
  }
  load_listYear(selectYear,FROM_YEAR, TO_YEAR, selected_year);
  load_dayOfMonth(tableDayOfMonth, selected_year, selected_month);
}
function btn_preYear() {
  // body...
  if(selected_year>FROM_YEAR) {
    change_selected(selected_month, parseInt(selected_year) - 1);
  }
  else {
    change_selected(selected_month, parseInt(selected_year) - 0);
  }
  load_listYear(selectYear,FROM_YEAR, TO_YEAR, selected_year);
  load_dayOfMonth(tableDayOfMonth, selected_year, selected_month);
}
function btn_preMonth() {
  // if curren month select equal januari then go to december previous year
  if(selected_month==0) {
    change_selected(11, selected_year);
    load_listMonth(selectMonth, selected_month);
    btn_preYear();
  }
  else {
    change_selected(parseInt(selected_month) - 1, selected_year);
    load_listMonth(selectMonth, selected_month);
    load_dayOfMonth(tableDayOfMonth, selected_year, selected_month);
  }
  console.log(selected_month);
}
 function btn_nextMonth() {
  // if curren month select equal december then go to januari next year
  if(selected_month==11) {
    change_selected(0, selected_year);
    load_listMonth(selectMonth, selected_month);
    btn_nextYear();
  }
  else {
    change_selected(parseInt(selected_month) + 1, selected_year);
    load_listMonth(selectMonth, selected_month);
    load_dayOfMonth(tableDayOfMonth, selected_year, selected_month);
  }
}
$(document).on('click', '.js-date', function(event) {
  event.preventDefault();
  /* select date on calender */
  if(this.innerText != "") {
      selected_date = parseInt($.trim(this.innerText));
    }
    else {}
  birthday.val($.trim(selected_year +"/"+ (parseInt(selected_month) +1)) +"/"+ selected_date);
  console.log(this.innerText);
  hide_calender();
});
// ----------------------Calender-----------------

