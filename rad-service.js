console.log("this is rad service");

//------- selectors ------------//

const radDescription = document.querySelector(".rad-step-description");

const serviceButton = document.getElementById("rad-service-btn");
const testButton = document.getElementById("rad-test-btn");
//const calendarInput = document.getElementById("rad-calendar");
const radFormFields = document.querySelectorAll(".form-field-wrapper");
const backButton = document.querySelectorAll(".rad-back-btn");
const timeSlotsWrapper = document.querySelector(".rad-timeslots-wrapper");

const radOpeningTimes = {
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
};

//---------------------------------------------

let radCurrentStep = 0;
let radSelection = "";

const state = {
  choice: null,
};

serviceButton.addEventListener("click", function () {
  showStep(1);
  radSelection = "service";
  state.choice = "service";
  updateAvailableTimeSlots();
});

testButton.addEventListener("click", function () {
  showStep(1);
  radSelection = "test-ride";
  state.choice = "test ride";
  updateAvailableTimeSlots();
});

function generateTimeSlots(selectedDay) {
  let openingTimesObj, selectedTimesObj;
  if (radSelection === "service") {
    openingTimesObj = radOpeningTimes;
    selectedTimesObj = radOpeningTimes[selectedDay];
  } else if (radSelection === "test-ride") {
    openingTimesObj = testTimes;
    selectedTimesObj = testTimes[selectedDay];
  }

  const openingTime =
    selectedTimesObj.open || openingTimesObj[selectedDay].open;
  const closingTime =
    selectedTimesObj.close || openingTimesObj[selectedDay].close;

  const timeSlots = [];
  let currentTime = moment(openingTime, "HH:mm");
  const closingMoment = moment(closingTime, "HH:mm");

  while (currentTime.isBefore(closingMoment)) {
    timeSlots.push(currentTime.format("HH:mm"));
    currentTime.add(30, "minutes");
  }

  return timeSlots;
}

function updateAvailableTimeSlots() {
  const calendarInput = document.getElementById("rad-calendar");
  const selectedDate = calendarInput.ariaValueMax
    .split("-")
    .reverse()
    .join("-");
  const selectedDay = moment(selectedDate).format("dddd");
  const timeSlots = generateTimeSlots(selectedDay);

  // Clear any existing time slots
  while (timeSlotsWrapper.firstChild) {
    timeSlotsWrapper.removeChild(timeSlotsWrapper.firstChild);
  }

  // Create a time slot element for each time slot and append it to the timeSlotsWrapper
  timeSlots.forEach((timeSlot) => {
    const timeSlotElement = document.createElement("div");
    timeSlotElement.classList.add("rad-timeslot");
    timeSlotElement.textContent = timeSlot;
    timeSlotsWrapper.appendChild(timeSlotElement);
  });
}

function showStep(stepIndex) {
  radFormFields[radCurrentStep].classList.remove("active");
  radFormFields[stepIndex].classList.add("active");
}

//------------ flatpickr --------------------//

document.addEventListener("DOMContentLoaded", function () {
  const calendarInput = document.getElementById("rad-calendar");

  flatpickr(calendarInput, {
    mode: "single",
    enableTime: false,
    dateFormat: "d-m-Y",
    minDate: "today",
    inline: true,
    //altInput: true,
    firstDayOfWeek: 1,
    altFormat: "",
    onChange: function (selectedDates, dateStr, instance) {
      // Code that updates time slots based on selected date goes here
    },
  });
});