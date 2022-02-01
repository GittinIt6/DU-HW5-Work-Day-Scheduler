let todayDate = document.getElementById("currentDay");
let saveButtons = document.getElementsByClassName("saveBtn");
const options = {weekday:"long", year:"numeric", month:"long", day:"numeric"};
let hourOfDay = new Date().getHours();
todayDate.textContent = new Date().toLocaleDateString('en-US',options);


for (let index = 0; index < saveButtons.length; index++) {
    let adjust = index + 9;
    let currentItem = document.getElementById(adjust);
    // Add event listener to buttons
    saveButtons[index].addEventListener("click", function() {
        if (currentItem.value !== ""){
            localStorage.setItem(adjust, currentItem.value);
        }
        else {
            if(localStorage.getItem(adjust) !== "") {
                localStorage.setItem(adjust, currentItem.value);
            }
        };
    });
    // Set background color of text areas based on time
    if (adjust < hourOfDay){
        // currentItem.style.backgroundColor = "LightGray";
        currentItem.classList.add("past");
    };
    if (adjust == hourOfDay){
        // currentItem.style.backgroundColor = "crimson";
        currentItem.classList.add("present");
    };
    if (adjust > hourOfDay){
        // currentItem.style.backgroundColor = "chartreuse";
        currentItem.classList.add("future");
    };
    //set values saved in local storage
    currentItem.value = localStorage.getItem(adjust);
};