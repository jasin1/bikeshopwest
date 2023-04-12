console.log("this is rad service");

//------- selectors ------------//

const radDescription = document.querySelector(".rad-step-description");

const serviceButton = document.getElementById("rad-service-btn");
const testButton = document.getElementById("rad-test-btn");
const calendarInput = document.getElementById("rad-calendar");
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

backButton.addEventListener("click",function(){
  showStep(radCurrentStep - 1);
});


function showStep(stepIndex){
  radSelection[radCurrentStep].classList.remove("active");
  radSelection[stepIndex].classList.add("active");
};


//------------ flatpickr --------------------//
flatpickr(calendarInput,{
  mode: "multiple",
  enableTime: false,
  dateFormat: "d-m-Y",
  minDate: "today",
  inline: true,
  onChange: function(selectedDates, dateStr, instance){

  }
});



