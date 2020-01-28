// current day displayed in header using id=currentDay.
var date = moment().format("dddd, MMMM Do, YYYY");

// var currentDate = document.getElementById("currentDay");
// currentDate.innerText = date;

$("#currentDay").text(date);
console.log();

// each time block is color coded to show if it is past(grey), present(red),future(green).
var hour = moment().hour();
console.log(hour);



// when clicking on time block enter input from user.
$(".input").on("click", function() {

});


// save input to local storage when save button is clicked (when refreshed info is not erased).
$(".saveButton").on("click", function() {

});