// Create a current date in the header with id="currentDay" class="lead"

var currentDate = moment();
var displayCurrentDate = document.querySelector('#currentDay');
displayCurrentDate.innerHTML = currentDate.format('dddd, MMMM Do YYYY, h:mm');

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
        $('#'+i).addClass('future');
    }
    if (currentTime > i) {
        $('#'+i).addClass('past');
    }
}


