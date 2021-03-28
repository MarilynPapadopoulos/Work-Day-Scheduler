// Create a current date in the header with id="currentDay" class="lead"

var currentDate = moment();
var displayCurrentDate = document.querySelector('#currentDay');
displayCurrentDate.innerHTML = currentDate.format('dddd MMM Do YYYY');

var currentTime= parseInt(moment().format('H'));


//When the button is clicked the textarea is saved to local storage 
$('.saveBtn').on('click', function(){
    var btnClicked = $(this).prev().val();
    var time = $(this).prev().attr('id');
    
    localStorage.setItem(time, btnClicked );     
});

//saves when page is refreshed and cycles through all time blocks
for (var i=9; i <19; i ++) {
    var valSaved = localStorage.getItem(i);
    $('#'+i).text(valSaved);

    if(currentTime === i){
        $('#'+i).addClass('present');   
    }
    if (currentTime < i) {
        console.log("hello");
        $('#'+i).addClass('future');
    }
    if (currentTime > i) {
        $('#'+i).addClass('past');
    }
}


// Add time to time blocks




// var timeBlockNine = document.querySelector('.nine');
// var timeBlockTen = document.querySelector('.ten');
// var timeBlockEleven = document.querySelector('.eleven');
// var timeBlockTwelve = document.querySelector('.twelve');
// var timeBlockThirteen = document.querySelector('.thirteen');
// var timeBlockFourteen = document.querySelector('.fourteen');
// var timeBlockFifteen = document.querySelector('.fifteen');
// var timeBlockSixteen = document.querySelector('.sixteen');
// var timeBlockSeventeen = document.querySelector('.seventeen');

// if(currentTime === 9){
//     $(timeBlockNine).addClass('present');   
// }
// if (currentTime < 9) {
//     console.log("hello");
//     $(timeBlockNine).addClass('future');
// }
// if (currentTime > 9) {
//     $(timeBlockNine).addClass('past');
// }


// if(currentTime === 10){
//     $(timeBlockTen).addClass("present");
//     console.log(currentTime);
// }
// if (currentTime < 10) {
//     $(timeBlockTen).addClass("future");
// }
// if (currentTime > 10) {
//     $(timeBlockTen).addClass("past");
// }


// if(currentTime === 11){
//     $(timeBlockEleven).addClass("present");  
// }
// if (currentTime < 11) {
//     $(timeBlockEleven).addClass("future");
// }
// if (currentTime > 11) {
//     $(timeBlockEleven).addClass("past");
// }

// if(currentTime === 12){
//     $(timeBlockTwelve).addClass("present");    
// }
// if (currentTime < 12) {
//     $(timeBlockTwelve).addClass("future");
// }
// if (currentTime > 12) {
//     $(timeBlockTwelve).addClass("past");
// }

// if(currentTime === 13){
//     $(timeBlockThirteen).addClass("present");   
// }
// if (currentTime < 13) {
//     $(timeBlockThirteen).addClass("future");
// }
// if (currentTime > 13) {
//     $(timeBlockThirteen).addClass("past");
// }

// if(currentTime === 14){
//     $(timeBlockFourteen).addClass("present");   
// }
// if (currentTime < 14) {
//     $(timeBlockFourteen).addClass("future");
// }
// if (currentTime > 14) {
//     $(timeBlockFourteen).addClass("past");
// }

// if(currentTime === 15){
//     $(timeBlockFifteen).addClass("present"); 
// }
// if (currentTime < 15) {
//     $(timeBlockFifteen).addClass("future");
// }
// if (currentTime > 15) {
//     $(timeBlockFifteen).addClass("past");
// }

// if(currentTime === 16){
//     $(timeBlockSixteen).addClass("present");
// }
// if (currentTime < 16) {
//     $(timeBlockSixteen).addClass("future");
// }
// if (currentTime > 16) {
//     $(timeBlockSixteen).addClass("past");
// }

// if(currentTime === 17){
//     $(timeBlockSeventeen).addClass("present");
// }
// if (currentTime < 17) {
//     $(timeBlockSeventeen).addClass("future");
// }
// if (currentTime > 17) {
//     $(timeBlockSeventeen).addClass("past");
// }