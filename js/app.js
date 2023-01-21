
var timeTable = $('.timetable');
var screenTime = $('.screen-time');
var task = $('.task');
var saveBtn = $('.save-btn');
var dateName = $('.date-name');
var actualTime = $('.actual-time');
var screenTime = document.querySelectorAll('.screen-time');
var doneBtn = $('.done-btn');
var saved = false;

//Set colors by time
screenTime.forEach(p => {
    timeCompararision(p)
});

//header
//create date
var now = moment();
dateName.text(now.format('dddd Do, MMM YYYY'));
//actual time running
window.setInterval(function () {
    actualTime.html(moment().format('HH:mm:ss') + ' h');
}, 1000);

//main
//for each btn clicked, bring the input with the same data-number to local storage
saveBtn.each( function (index) {
    index = $(this).data('number');
    $(this).click( function () {
      var task = $(`input[data-number= ${index}]`).val();
      saved = true;
      if(task !== '') {
        window.localStorage.setItem(`saved-${index}`, saved);
        window.localStorage.setItem(`task-${index}`, task);
        displayDoneBtn($(this));
      } else {
        console.log('what!!')
      }

      
    })

});

//Functions
function timeCompararision (element) {
    var momentToCheck = moment().format('HH') + ':00';
    //if the text is smaller than the actual time, then change bg
    var i = element.dataset.number;
    var input = $(`input[data-number=${i}]`);
    var li = element.parentElement;
    if(element.textContent < momentToCheck) {
       element.style = 'background: #b9beb9;';
       input.css('background', '#b9beb9');
    } else if (element.textContent === momentToCheck) {
    //    element.parentElement.classList.add('active');
       element.style = 'background : #4FC754';
       input.css('background', '#4FC754');
       li.classList.add('active');
    } else {
        element.style = 'background: #96E799;';
    }
}
//display done btn
function displayDoneBtn (element) {
    var btn = element.data('number');
    doneBtn.each(function() {
        var j = $(this).data('number');
        if(j === btn ) {
            $(this).addClass('active-done-btn');
            doneBtn.each(( () => {
                var index = $(this).data('number');
                $(this).click(() => {
                    $(this).removeClass('active-done-btn');
                    window.localStorage.removeItem(`task-${index}`);
                    window.localStorage.removeItem(`saved-${index}`);
                    var input = $(`input[data-number= ${index}]`);
                    input.val('');
                })
              }))
        }
    })
}
//show respective colors
function inputColor() {
    task.each( function () {
        let dataNum = $(this).data('number');
    }
        
    )
}
//loads the text content from local storage for the inputs
$(document).ready(
    task.each( function(index) {
        inputColor();
        index = $(this).data('number');
        $(this).val(window.localStorage.getItem(`task-${index}`));
        var isSaved = window.localStorage.getItem(`saved-${index}`)
        var btn = $(`.done-btn[data-number = ${index}]`);
        if(isSaved) {
            btn.addClass('active-done-btn');
            btn.click(()=> {
                btn.removeClass('active-done-btn');
                window.localStorage.removeItem(`saved-${index}`);
                var input = $(`input[data-number= ${index}]`);
                    input.val('')
            })
        }
        
    }) 
)