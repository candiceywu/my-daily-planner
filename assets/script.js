// Use Moment.js to format the calendar date by: day of the week, Month + dayth
// 1. What is today's date in the following format: Jan 1st, 1999?
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
