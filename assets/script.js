// Use Moment.js to format the calendar date by: day of the week, Month + dayth

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


//prevent 'enter' key from being used; user must click save button
$(document).on("keydown", "form", function(event) { 
    return event.key != "Enter";
});


var activityFormEl = $('#activity-form');
var activityListEl = $('#activity-list');

function submitForm(event) {
  event.preventDefault();

  activityItem = $('input[name="activity-input"]').val();

  if (!activityItem) {
    console.log('No activities have been scheduled for this time.');
    return;
  }

  //creates list for logged activities 
  var activityListItemEl = $('<li class="activity">');
  activityListItemEl.text(activityItem);


  // print to the page
  activityListEl.append(activityListItemEl);

//   // clear the form input element
//   $('input[name="activity-input"]').val('');
// }

//need to create .on for when button is clicked, activity item is logged into <li>

activityFormEl.on('click', submitForm);
