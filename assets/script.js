// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var currentDate = $("#currentDay");
var currentTime = parseInt(dayjs().format('H'));
// var timeBlock = $(".time-block");
var textAreaEl = $("textarea");
calendarItems = [];
// var timeTextEl = $("id");






$(function () {
  function displayCalendar() {
  var presentTime = dayjs().format('dddd, MMMM D, YYYY [at] hh:mm:ss a');
  currentDate.text(presentTime);
}



$("#17 .description").val(localStorage.getItem(17))

  
 $('.saveBtn').on("click", function(event) {
  console.log($(this));
      var timeBlockToDo = $(this).parent().attr("id");
      console.log(timeBlockToDo);
      var calendarToDo = $(this).siblings("textarea").val();
      console.log(calendarToDo);
      
      localStorage.setItem(timeBlockToDo, calendarToDo);
    })



  console.log(currentTime);

  function hourColor() {
    $(".description").each(function () {
      console.log(this);
      console.log(parseInt($(this).parent().attr("id")));
      var blockHourNumber = parseInt($(this).parent().attr("id"));
      if (blockHourNumber == currentTime){
        $(this).addClass('present');
      }else if (blockHourNumber > currentTime) {
        $(this).addClass('future');
      }else{ (blockHourNumber < currentTime) 
        $(this).addClass('past');
      }});
    }

  displayCalendar();
  setInterval(displayCalendar, 1000);
  hourColor();
  saveCalendarItems();
  renderCalendarItems();
  })


// event.preventDefault();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.