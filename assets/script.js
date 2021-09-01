// Use Moment.js to format the calendar date by: day of the week, Month + dayth
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//prevent 'enter' key from being used; user must click save button
$(document).on("keydown", "form", function (event) {
  return event.key != "Enter";
});

//variables for each time block
var hour8 = $("#8");
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour13= $("#13");
var hour14 = $("#14");
var hour15 = $("#15");
var hour16 = $("#16");
var hour17 = $("#17");
var currentHour = moment().format("HH");
console.log(currentHour);


var text8AM = $("#text8am");
var text9AM = $("#text9am");
var text10AM = $("#text10am");
var text11AM = $("#text11am");
var text12PM = $("#text12pm");
var text1PM = $("#text1pm");
var text2PM = $("#text2pm");
var text3PM = $("#text3pm");
var text4PM = $("#text4pm");
var text5PM = $("#text5pm");

var saveBtn = $(".saveBtn");


//button clicks, local storage
saveBtn.on("click", function(){
  localStorage.setItem("8AM", (text8AM.val()));
  localStorage.setItem("9AM", (text9AM.val()));
  localStorage.setItem("10AM", (text10AM.val()));
  localStorage.setItem("11AM", (text11AM.val()));
  localStorage.setItem("12PM", (text12PM.val()));
  localStorage.setItem("1PM", (text1PM.val()));
  localStorage.setItem("2PM", (text2PM.val()));
  localStorage.setItem("3PM", (text3PM.val()));
  localStorage.setItem("4PM", (text4PM.val()));
  localStorage.setItem("5PM", (text5PM.val()));
});


//get content stored and send to screen
$("#text8am").append(localStorage.getItem("8AM"));
$("#text9am").append(localStorage.getItem("9AM"));
$("#text10am").append(localStorage.getItem("10AM"));
$("#text11am").append(localStorage.getItem("11AM"));
$("#text12pm").append(localStorage.getItem("12PM"));
$("#text1pm").append(localStorage.getItem("1PM"));
$("#text2pm").append(localStorage.getItem("2PM"));
$("#text3pm").append(localStorage.getItem("3PM"));
$("#text4pm").append(localStorage.getItem("4PM"));
$("#text5pm").append(localStorage.getItem("5PM"));


// color-audit of current time and activities
function pastPresentFuture() {
  $(".time-block").each(function () {
      var calendarHour = parseInt($(this).attr("id"));

      if (calendarHour > currentHour) {
          $(this).addClass("future")
      }
      else if (calendarHour == currentHour) {
          $(this).addClass("present");
      }
      else {
          $(this).addClass("past");
      }
  })
}

pastPresentFuture();


