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

//------------- make a choice in step 1 ---------------//

serviceButton.addEventListener("click", function () {
  console.log("service btn clicked");
  serviceButton.classList.add("active");
  testButton.classList.remove("active");
});

testButton.addEventListener("click", function () {
  console.log("test btn clicked");
  testButton.classList.add("active");
  serviceButton.classList.remove("active");
});

//-------------------- flatpickr ---------------------------//

window.addEventListener("load", function () {
  const calendarInput = document.getElementById("rad-calendar");

  let radFp;

  function initFlatpickr() {
    console.log("initFlatpickr called");
    radFp = flatpickr(calendarInput, {
      disable: getDisabledDates(),
      enableTimes: false,
      dateFormat: "d.m.Y",
      //mode: "single",
      minDate: "today",
      inline: true,
      maxDate: new Date().fp_incr(90),
      onChange: onSelectDate,
    });
  }

  initFlatpickr();
});

function onSelectDate(onSelectDates) {
  const onSelectDate = onSelectDates[0];
  const availableTimeSlots = getAvailableTimeSlots(onSelectDate);
  renderTimeSlots(availableTimeSlots);
}

function getDisabledDates() {
  console.log("Get disabled dates function");
  const chosenOption = getChosenOption();
  const disabledDates = [];

  for (const day in radOpeningTimes) {
    if (
      (chosenOption === "book a service" && day === "Sunday") ||
      (chosenOption === "book a test ride" && !(day in testTimes))
    ) {
      disabledDates.push(day);
    }
  }

  return disabledDates;
}

function getChosenOption() {
  if (serviceButton.classList.contains("active")) {
    return "book a service";
  } else if (testButton.classList.contains("active")) {
    return "book a test ride";
  }
}

function getAvailableTimeSlots(selectedDate) {
  const availableTimes = [];
  const dayOfWeek = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const openingTime = getOpeningTime(dayOfWeek);
  const closingTime = getClosingTime(dayOfWeek);

  for (const timeSlot in timeSlots) {
    if (
      timeSlots[timeSlot] >= openingTime &&
      timeSlots[timeSlot] <= closingTime
    ) {
      availableTimes.push(timeSlots[timeSlot]);
    }
  }

  return availableTimes;
}

function getOpeningTime(dayOfWeek) {
  return radOpeningTimes[dayOfWeek].open;
}

function getClosingTime(dayOfWeek) {
  return radOpeningTimes[dayOfWeek].close;
}

function renderTimeSlots(availableTimeSlots) {
  let timeSlotsHTML = "";
  availableTimeSlots.forEach((timeSlot) => {
    timeSlotsHTML += `<button type="button" class="rad-timeslot">${timeSlot}</button>`;
  });

  timeSlotsWrapper.innerHTML = timeSlotsHTML;

  const timeSlotButtons = document.querySelectorAll(".rad-timeslot");

  timeSlotButtons.forEach((button) => {
    button.addEventListener("click", () => {
      timeSlotButtons.forEach((button) => {
        button.classList.remove("selected");
      });
      button.classList.add("selected");
    });
  });
}
