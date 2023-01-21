//Collec the date and the real time
//Inner date and time
//create an ordered list
//on the list items there is a paragraph and an input
  //paragraph for the time - if the value of the time is == to p.textContent then apply styles...
  //input -- when the btn next to it is clicked, the iput text is saved on local storage
//on load inner it para el input.textContent = textfrom.localStorage

//main
//get the elements on js
var timeTable = $('.timetable');
var screenTime = $('.screen-time');
var task = $('.task');
var saveBtn = $('.save-btn');

//for each btn clicked, bring the input with the same data-number to local storage
saveBtn.each( function (index) {
    index = $(this).data('number');
    $(this).click( function () {
      var task = $(`input[data-number= ${index}]`).val();
      window.localStorage.setItem(`task-${index}`, task);
    })
    
})
//loads the text content from local storage for the inputs 
$(document).ready(
    task.each( function(index) {
        index =$(this).data('number');
        $(this).val(window.localStorage.getItem(`task-${index}`));
    })
)
