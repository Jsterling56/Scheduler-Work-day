$(document).ready(function(){
  let NowMoment = moment().format("MMMM Do YYYY");
  let displayDate = document.getElementById("currentDay");
  displayDate.textContent = NowMoment;
  let currentHour = moment().format("HH");

  $("#clearFieldsBtn").click(function(event){
    event.preventDefault(); 
    $("textarea").val("");
    localStorage.clear();
  });

  $(".time-div").each(function(){
    var timeDiv = $(this).attr("id").split("-")[1];
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text"); 
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  $(".saveBtn").click(function(event){
    event.preventDefault();
    var value = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  for (let hour = 9; hour <= 17; hour++) {
    $(`#hour-${hour} .description`).val(localStorage.getItem(hour.toString()));
  }
});
