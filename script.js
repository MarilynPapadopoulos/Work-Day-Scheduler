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

var currentTime= parseInt(moment().format('H'));


var timeBlockNine = document.querySelector('.nine');
var timeBlockTen = document.querySelector('.ten');
var timeBlockEleven = document.querySelector('.eleven');
var timeBlockTwelve = document.querySelector('.twelve');
var timeBlockThirteen = document.querySelector('.thirteen');
var timeBlockFourteen = document.querySelector('.fourteen');
var timeBlockFifteen = document.querySelector('.fifteen');
var timeBlockSixteen = document.querySelector('.sixteen');
var timeBlockSeventeen = document.querySelector('.seventeen');

if(currentTime === 9){
    $(timeBlockNine).addClass('present');   
}
console.log(currentTime);
if (currentTime < 9) {
    console.log("hello");
    $(timeBlockNine).addClass('future');
}
if (currentTime > 9) {
    $(timeBlockNine).addClass('past');
}


if(currentTime === 10){
    $(timeBlockTen).addClass("present");
    console.log(currentTime);
}
if (currentTime < 10) {
    $(timeBlockTen).addClass("future");
}
if (currentTime > 10) {
    $(timeBlockTen).addClass("past");
}


if(currentTime === 11){
    $(timeBlockEleven).addClass("present");  
}
if (currentTime < 11) {
    $(timeBlockEleven).addClass("future");
}
if (currentTime > 11) {
    $(timeBlockEleven).addClass("past");
}

if(currentTime === 12){
    $(timeBlockTwelve).addClass("present");    
}
if (currentTime < 12) {
    $(timeBlockTwelve).addClass("future");
}
if (currentTime > 12) {
    $(timeBlockTwelve).addClass("past");
}

if(currentTime === 13){
    $(timeBlockThirteen).addClass("present");   
}
if (currentTime < 13) {
    $(timeBlockThirteen).addClass("future");
}
if (currentTime > 13) {
    $(timeBlockThirteen).addClass("past");
}

if(currentTime === 14){
    $(timeBlockFourteen).addClass("present");   
}
if (currentTime < 14) {
    $(timeBlockFourteen).addClass("future");
}
if (currentTime > 14) {
    $(timeBlockFourteen).addClass("past");
}

if(currentTime === 15){
    $(timeBlockFifteen).addClass("present"); 
}
if (currentTime < 15) {
    $(timeBlockFifteen).addClass("future");
}
if (currentTime > 15) {
    $(timeBlockFifteen).addClass("past");
}

if(currentTime === 16){
    $(timeBlockSixteen).addClass("present");
}
if (currentTime < 16) {
    $(timeBlockSixteen).addClass("future");
}
if (currentTime > 16) {
    $(timeBlockSixteen).addClass("past");
}

if(currentTime === 17){
    $(timeBlockSeventeen).addClass("present");
}
if (currentTime < 17) {
    $(timeBlockSeventeen).addClass("future");
}
if (currentTime > 17) {
    $(timeBlockSeventeen).addClass("past");
}