// Create a current date in the header with id="currentDay" class="lead"

var currentDate = moment();
var displayCurrentDate = document.querySelector("#currentDay");
displayCurrentDate.innerHTML = currentDate.format('dddd MMM Do YYYY');


// Create 9 rows with a class="row", containing 3: col-2, col-8 class, button col-2 



//For the middle column: 1.create a onclick () that adds text 2. create a function that checks the time. 

$("#textarea").click(function() {
    console.log("clicked");
})

//Save button to save contents of text area to local storage

$("#saveBtn").click(function(){
    var text = $("#textarea").val();
    console.log(text);
    localStorage.setItem("UserInput", text);
});

// Get UserInput to remain after page refreshes
localStorage.getItem("UserInput");

//create createTask() with taskList = $(<li) append to it addTask=$(<span).text.val

//Save the value inside each row that saves when you press button in third column ensuring that it saves after refresh

// Add time to time blocks

//if time is past, present or future, apply correct color
