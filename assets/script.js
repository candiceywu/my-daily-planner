// Use Moment.js to format the calendar date by: day of the week, Month + dayth
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//prevent 'enter' key from being used; user must click save button
$(document).on("keydown", "form", function (event) {
  return event.key != "Enter";
});



//logging entry and using button to save

var activityEl = $(".col-sm-8 col-md-8 col-lg-8");
var activityList = $("#activity-list");
var button = $(".btn btn-info");
var btn1 = $("#btn-1");
var btn2 = $("#btn-2");
var activityArray1 = [];
var activityArray2 = [];

//8am timeslot
btn1.on("click", function () {
  console.log("button 1 clicked");
  var inputText = $("#activity-input-1").val();
  activityArray1.push(inputText);
  console.log(activityArray1);



  localStorage.setItem("8AM", JSON.stringify(activityArray1));

});

//9am timeslot
btn2.on("click", function () {
  console.log("button 2 clicked");
  var inputText = $("#activity-input-2").val();
  activityArray2.push(inputText);
  console.log(activityArray2);

 
  // var activityListItemEl = $('<li class="list">');
  // activityListItemEl.text(inputText);

  // // print to the page
  // activityList.append(activityListItemEl);


  localStorage.setItem("9AM", JSON.stringify(activityArray2));
});






//local storage - want to store an array to local storage
// use json stringify to convert array to string; then use setItem to put into local storage

//use getItem from local storage; use JSON to parse to turn back into array to display




// button.on("click", function () {

//   var activityItem = $('input[name="activity-input"]').val();

//   if (!activityItem) {
//     console.log('No activities have been planned for this hour');
//     return;
//   }

//   var activityListItemEl = $('<li class="list">');
//   activityListItemEl.text(activityItem);

//   // print to the page
//   activityListEl.append(activityListItemEl);
//   console.log("button was pressed");
// })



// function submit(event) {



//   var activityItem = $('input[name="activity-input"]').val();

//   if (!activityItem) {
//     console.log('No activities have been planned for this hour');
//     return;
//   }

//   var activityListItemEl = $(
//     '<li class="list">'
//   );
//   activityListItemEl.text(activityItem);

//   // print to the page
//  activityListEl.append(activityListItemEl);
// }

// activityFormEl.click('submit', submit);






