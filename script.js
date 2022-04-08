var datetime = null,
        date = null;

        // moment display current time and date
var update = function() {
    date = moment(new Date())
    // day month date, hours minutes seconds
    datetime.html(date.format('dddd, MMMM Do, h:mm:ss a'));
}

// update the current time
$(document).ready(function(){
    datetime = $('#currentTime')
    update();
    // update every second
    setInterval(update, 1000);
});

$(document).ready(function () {
    // click listener for save button 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings("hourBlocks").val();
        var time = $(this).parent().attr("id");

        // Save text content in local storage
        localStorage.setItem(time, text);
    })
})

// change the colors of the rows based on the time
var currentHour = (new Date()).getHours();
$('.colorcode')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 6){
      $(this).css('background-color','Blue');
    }else if(val < currentHour && val > currentHour-6){
      $(this).css('background-color','Red');
    }else if(val === currentHour){
      $(this).css('background-color','Green');
    }else{
      $(this).css('background-color','White');
    }
  });


// get each item from local storage if it exists 
    $("#hour8 .activitySpace").val(localStorage.getItem("hour8"));
    $("#hour9 .activitySpace").val(localStorage.getItem("hour9"));
    $("#hour10 .activitySpace").val(localStorage.getItem("hour10"));
    $("#hour11 .activitySpace").val(localStorage.getItem("hour11"));
    $("#hour12 .activitySpace").val(localStorage.getItem("hour12"));
    $("#hour13 .activitySpace").val(localStorage.getItem("hour13"));
    $("#hour14 .activitySpace").val(localStorage.getItem("hour14"));
    $("#hour15 .activitySpace").val(localStorage.getItem("hour15"));
    $("#hour16 .activitySpace").val(localStorage.getItem("hour16"));
    $("#hour17 .activitySpace").val(localStorage.getItem("hour17"));

