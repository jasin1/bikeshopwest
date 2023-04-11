console.log("this is rad service");

//------- selectors ------------//

const radDescription = document.querySelector(".rad-step-description");

const radForm = {
  currentStep: 1,
  radSteps: document.querySelectorAll(".rad-selection"),
  // nextButtons: document.querySelectorAll('[id^="next"]'),
  prevButtons: document.querySelectorAll(".prev-button"),
  submitButton: document.getElementById("rad-submit"),
};