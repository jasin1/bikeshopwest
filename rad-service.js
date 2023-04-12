console.log("this is rad service");

//------- selectors ------------//

const radDescription = document.querySelector(".rad-step-description");

const serviceButton = document.getElementById("rad-service-btn");
const testButton = document.getElementById("rad-test-btn");
//const calendarInput = document.getElementById("rad-calendar");
const radFormFields = document.querySelectorAll(".form-field-wrapper");
const backButton = document.querySelectorAll(".rad-back-btn");

let radCurrentStep = 0;
let radSelection = "";

serviceButton.addEventListener("click", function(){
  showStep(1);
  radSelection = "service";
});

testButton.addEventListener("click", function(){
  showStep(1);
  radSelection = "test-ride";
});

// backButton.addEventListener("click",function(){
//   showStep(radCurrentStep - 1);
// });


function showStep(stepIndex){
  radSelection[radCurrentStep].classList.remove("active");
  radSelection[stepIndex].classList.add("active");
};


//------------ flatpickr --------------------//

const openingTimes = {
  Monday: { open: "14:00", close: "17:45" },
  Tuesday: { open: "10:00", close: "17:45" },
  Wednesday: { open: "10:00", close: "17:45" },
  Thursday: { open: "10:00", close: "17:45" },
  Friday: { open: "15:00", close: "17:45" },
  Saturday: { open: "10:00", close: "16:45" },
  Sunday: { open: "", close: "" },
};

const testTimes = {
  Tuesday: { open: "12:00", close: "14:00" },
  Thursday: { open: "12:00", close: "14:00" },
  Saturday: { open: "11:00", close: "15:00" },
  Sunday: { open: "", close: "" },
}

document.addEventListener('DOMContentLoaded', function() {
  const calendarInput = document.getElementById("rad-calendar");

  flatpickr(calendarInput, {
    mode: "single",
    enableTime: false,
    dateFormat: "d-m-Y",
    minDate: "today",
    inline: true,
    altInput: true,
    altFormat: "",
    onChange: function(selectedDates, dateStr, instance) {
      // Code that updates time slots based on selected date goes here
    }
  });
});



