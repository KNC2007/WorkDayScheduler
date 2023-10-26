var currentDate = $("#currentDay");
var currentTime = parseInt(dayjs().format('H'));



$(function () {
  // display the time and date at the top of the calendar
  function displayCalendar() {
  var presentTime = dayjs().format('dddd, MMMM D, YYYY [at] hh:mm:ss a');
  currentDate.text(presentTime);
}


  // renders the calendar items on the page
  for (var i = 9; i <= 17; i++) {
    var textAreaEl = $(".description");
    textAreaEl[i - 9].value = localStorage.getItem(i);
  }

  // saves the items on each time block of the calendar
  $('.saveBtn').on("click", function(event) {
      console.log($(this));
      var timeBlockToDo = $(this).parent().attr("id");
      console.log(timeBlockToDo);
      var calendarToDo = $(this).siblings("textarea").val();
      console.log(calendarToDo);
      localStorage.setItem(timeBlockToDo, calendarToDo);
    })



  console.log(currentTime);

// runs the color of the calendar hour blocks to show past times, future, and present
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