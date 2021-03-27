// Create a current date in the header with id="currentDay" class="lead"

var currentDate = moment();
var displayCurrentDate = document.querySelector("#currentDay");
displayCurrentDate.innerHTML = currentDate.format('dddd MMM Do YYYY');


$('#textarea').click(function() {
});

//When the button is clicked the textarea is saved to local storage 
$('#nineBtn').on('click', function(){
    var btnClicked = $(this).prev().val();
    console.log($(this));
    console.log(btnClicked);
    
    localStorage.setItem('9:00', btnClicked );     
});
//saves when page is refreshed
var valSaved = localStorage.getItem('9:00');
    $('.nine').val(valSaved);

//When the button is clicked the textarea is saved to local storage 
$('#tenBtn').on('click', function(){
    var btnClicked = $(this).prev().val();
    console.log($(this));
    console.log(btnClicked);

    var hourlyInput =[];

    localStorage.setItem('10:00', btnClicked );   
});
//saves when page is refreshed
var valSaved = localStorage.getItem("10:00");
$('.ten').val(valSaved);

//When the button is clicked the textarea is saved to local storage 
$('#elevenBtn').on('click', function(){
    var btnClicked = $(this).prev().val();
    console.log($(this));
    console.log(btnClicked);

    var hourlyInput =[];

    localStorage.setItem('11:00', btnClicked );   
});
//saves when page is refreshed
var valSaved = localStorage.getItem("11:00");
$('.eleven').val(valSaved);

//When the button is clicked the textarea is saved to local storage 
$('#twelveBtn').on('click', function(){
    var btnClicked = $(this).prev().val();
    console.log($(this));
    console.log(btnClicked);

    var hourlyInput =[];

    localStorage.setItem('12:00', btnClicked );   
});
//saves when page is refreshed
var valSaved = localStorage.getItem("12:00");
$('.twelve').val(valSaved);

//When the button is clicked the textarea is saved to local storage 
$('#thirteenBtn').on('click', function(){
    var btnClicked = $(this).prev().val();
    console.log($(this));
    console.log(btnClicked);

    var hourlyInput =[];

    localStorage.setItem('1:00', btnClicked );   
});
//saves when page is refreshed
var valSaved = localStorage.getItem('1:00');
$('.thirteen').val(valSaved);

//When the button is clicked the textarea is saved to local storage 
$('#fourteenBtn').on('click', function(){
    var btnClicked = $(this).prev().val();
    console.log($(this));
    console.log(btnClicked);

    var hourlyInput =[];

    localStorage.setItem('2:00', btnClicked );   
});
//saves when page is refreshed
var valSaved = localStorage.getItem('2:00');
$('.fourteen').val(valSaved);

//When the button is clicked the textarea is saved to local storage 
$('#fifteenBtn').on('click', function(){
    var btnClicked = $(this).prev().val();
    console.log($(this));
    console.log(btnClicked);

    var hourlyInput =[];

    localStorage.setItem('3:00', btnClicked );   
});
//saves when page is refreshed
var valSaved = localStorage.getItem('3:00');
$('.fifteen').val(valSaved);

//When the button is clicked the textarea is saved to local storage 
$('#sixteenBtn').on('click', function(){
    var btnClicked = $(this).prev().val();
    console.log($(this));
    console.log(btnClicked);

    var hourlyInput =[];

    localStorage.setItem('4:00', btnClicked );   
});
//saves when page is refreshed
var valSaved = localStorage.getItem('4:00');
$('.sixteen').val(valSaved);

//When the button is clicked the textarea is saved to local storage 
$('#seventeenBtn').on('click', function(){
    var btnClicked = $(this).prev().val();
    console.log($(this));
    console.log(btnClicked);

    var hourlyInput =[];

    localStorage.setItem('5:00', btnClicked );   
});
//saves when page is refreshed
var valSaved = localStorage.getItem('5:00');
$('.seventeen').val(valSaved);


// Add time to time blocks

var currentTime= moment();
var nineoclock = moment(9).format('h');
console.log(nineoclock);

var timeBlockNine = document.querySelector('.nine');

if(moment().format('h').isSame(moment(nineoclock).format('h'))) {
    timeBlockNine.addClass("present");
    console.log("hello");
}






// var nineOclock = moment().hour(9);
// var displayNineOclock = document.querySelector("#nine-oclock");
// displayNineOclock.innerHTML = nineOclock.format('h','mm','A');

//For the middle column: 1.create a onclick () that adds text 2. create a function that checks the time. 






//if time is past, present or future, apply correct color
