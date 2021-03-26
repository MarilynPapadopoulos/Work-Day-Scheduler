// Create a current date in the header with id="currentDay" class="lead"

var currentDate = moment();
var displayCurrentDate = document.querySelector("#currentDay");
displayCurrentDate.innerHTML = currentDate.format('dddd MMM Do YYYY');

// Add time to time blocks
// var nineOclock = moment().hour(9);
// var displayNineOclock = document.querySelector("#nine-oclock");
// displayNineOclock.innerHTML = nineOclock.format('h','mm','A');

//For the middle column: 1.create a onclick () that adds text 2. create a function that checks the time. 

$("#textarea").click(function() {
});

//When the button is clicked i want to save your sibliling with id textarea to local storage - figure out how to store multiple UserInput
$('#saveBtn').on('click', function(){
    var btnClicked = $(this).prev().val();
    console.log($(this));
    console.log(btnClicked);

    var hourlyInput =[];

    localStorage.setItem('UserInput', btnClicked );   

});



// $("#saveBtn").click(function(){
//     var text = $("#textarea").val();
//     console.log(text);
//     localStorage.setItem("UserInput", text);
// });

// Get UserInput to remain after page refreshes

var valSaved = localStorage.getItem("UserInput");
$("#textarea").val(valSaved);


//Save the value inside each row that saves when you press button in third column ensuring that it saves after refresh




//if time is past, present or future, apply correct color
