//Collec the date and the real time
//Inner date and time
//create an ordered list
//on the list items there is a paragraph and an input
  //paragraph for the time - if the value of the time is == to p.textContent then apply styles...
  //input -- when the btn next to it is clicked, the iput text is saved on local storage
//on load inner it para el input.textContent = textfrom.localStorage
//get the elements on js
var timeTable = $('.timetable');
var screenTime = $('.screen-time');
var task = $('.task');
var saveBtn = $('.save-btn');
var dateName = $('.date-name');
var actualTime = $('.actual-time');
var screenTime = document.querySelectorAll('.screen-time');
//header
//create date
var now = moment();
dateName.text(now.format('dddd Do, MMM YYYY'));
//actual time running
window.setInterval(function () {
    actualTime.html(moment().format('hh:mm:ss') + ' h');
}, 1000);

//Set colors by time
screenTime.forEach(p => { 
    timeCompararision(p);
    
});
function timeCompararision (element) {
    var momentToCheck = moment().format('hh') + ':00h';
    console.log(momentToCheck);
    //if the text is smaller than the actual time, then change bg
    if(element.textContent < momentToCheck) {
       element.style = 'background: #222;';
    } else if (element.textContent === momentToCheck) {
        element.classList.add('active');
    } else {
        element.style = 'background: lightblue;';
    }
}
//si el tiempo es mayor que el contenido entonces cambia el color a gris
//si es el momento actual,scale y bg
//si es futuro nada

//main
//for each btn clicked, bring the input with the same data-number to local storage
saveBtn.each( function (index) {
    index = $(this).data('number');
    $(this).click( function () {
      var task = $(`input[data-number= ${index}]`).val();
      window.localStorage.setItem(`task-${index}`, task);
    })

});
//loads the text content from local storage for the inputs
$(document).ready(
    task.each( function(index) {
        index =$(this).data('number');
        $(this).val(window.localStorage.getItem(`task-${index}`));
    })
)
