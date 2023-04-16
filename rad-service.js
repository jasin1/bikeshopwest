const radDescription = document.querySelector(".rad-step-description");
const serviceButton = document.getElementById("rad-service-btn");
const testButton = document.getElementById("rad-test-btn");
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
  Monday: { open: "", close: "" },
  Wednesday: { open: "", close: "" },
  Friday: { open: "", close: "" },
};

//------------- make a choice in step 1 ---------------//
let radFp;
let notTheseDays = {
  service:["Sunday"],
  test:["Sunday", "Monday", "Wednesday", "Friday"],
};

// function getDisabledDates(instance) {
//   console.log("Get disabled dates function");
//   const chosenOption = getChosenOption();
//   const disabledDays = notTheseDays[chosenOption];
//   const disabledDates = [];
//   //const days = instance.days;

//   for (const day in disabledDays) {
//     if (
//       (chosenOption === "book a service" && day === "Sunday") ||
//       (chosenOption === "book a test ride" && !(day in testTimes))
//     ) {
//       const date = getNextDate(day);
//       const dateObj = new Date(
//         date.getFullYear(),
//         date.getMonth(),
//         date.getDate(),
//       );
//       disabledDates.push(dateObj);

//       // find the day element and add the disabled class
//       for (const dayE1 of days) {
//         if (dayE1.dateObj.getTime() === dateObj.getTime()) {
//           dayE1.classList.add("disabled");
//           break;
//         }
//       }
//     }
//   }
//   return disabledDates;
// }

function getDisabledDates(instance) {
  console.log("Get disabled dates function");
  const chosenOption = getChosenOption();
  console.log("chosenOption:", chosenOption);
  const disabledDays = notTheseDays[chosenOption];
  console.log("disabledDays:", disabledDays);
  const disabledDates = [];

  for (const day of disabledDays) {
    const date = getNextDate(day);
    const dateObj = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    disabledDates.push(dateObj);

    // find the day element and add the disabled class
    for (const dayE1 of instance.days) {
      if (dayE1.dateObj.getTime() === dateObj.getTime()) {
        dayE1.classList.add("disabled");
        break;
      }
    }
  }

  return disabledDates;
}

function getNextDate(day) {
  const today = new Date();
  const dayIndex = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ].indexOf(day);
  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + ((7 + dayIndex - today.getDay()) % 7) + 1); // add days until the next day
  return nextDate;
}

function getChosenOption() {
  if (serviceButton.classList.contains("active")) {
    return "book a service";
  } else if (testButton.classList.contains("active")) {
    return "book a test ride";
  }
}

serviceButton.addEventListener("click", function () {
  console.log("service btn clicked");
  serviceButton.classList.add("active");
  testButton.classList.remove("active");
  radFp.set("disable", notTheseDays.service);
});

testButton.addEventListener("click", function () {
  console.log("test btn clicked");
  testButton.classList.add("active");
  serviceButton.classList.remove("active");
  radFp.set("disable", notTheseDays.test);
});
//-------------------- flatpickr ---------------------------//

window.addEventListener("load", function () {
  const calendarInput = document.getElementById("rad-calendar");

  function initFlatpickr() {
    console.log("initFlatpickr called");
    radFp = flatpickr(calendarInput, {
      enableTimes: false,
      dateFormat: "d.m.Y",
      //mode: "single",
      minDate: "today",
      inline: true,
      maxDate: new Date().fp_incr(90),
      onChange: onSelectDate,
      disableMobile: "true",
      onReady: function (selectedDates, dateStr, instance) {
        const radDisabledDates = getDisabledDates(instance);
        instance.set("disable", radDisabledDates);
      },
    });
  }

  function onSelectDate(onSelectDates) {
    const onSelectDate = onSelectDates[0];
    const chosenOption = getChosenOption();
    const availableTimeSlots = getAvailableTimeSlots(
      onSelectDate,
      chosenOption,
    );
    renderTimeSlots(availableTimeSlots);
  }

  initFlatpickr();
});

//-------------------- TimeSlots ---------------------//

function generateTimeSlots(openingTime, closingTime) {
  const timeSlots = [];
  let currentTime = openingTime;

  while (currentTime <= closingTime) {
    timeSlots.push(currentTime);
    const [hours, minutes] = currentTime.split(":");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setMinutes(date.getMinutes() + 30);
    currentTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  return timeSlots;
}


function getAvailableTimeSlots(selectedDate, chosenOption) {
  const availableTimes = [];
  const dayOfWeek = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const openingTime = getOpeningTime(dayOfWeek, chosenOption);
  const closingTime = getClosingTime(dayOfWeek, chosenOption);

  const timeSlots = generateTimeSlots(openingTime, closingTime);

  timeSlots.forEach((timeSlot) => {
    if (timeSlot >= openingTime && timeSlot <= closingTime) {
      availableTimes.push(timeSlot);
    }
  });
  return availableTimes;
}

function getOpeningTime(dayOfWeek, chosenOption) {
  if (chosenOption === "book a service") {
    return radOpeningTimes[dayOfWeek].open;
  } else if (chosenOption === "book a test ride") {
    return testTimes[dayOfWeek].open;
  }
}

function getClosingTime(dayOfWeek, chosenOption) {
  if (chosenOption === "book a service") {
    return radOpeningTimes[dayOfWeek].close;
  } else if (chosenOption === "book a test ride") {
    return testTimes[dayOfWeek].close;
  }
}

function renderTimeSlots(availableTimeSlots) {
  let timeSlotsHTML = "";
  availableTimeSlots.forEach((timeSlot) => {
    timeSlotsHTML += `<button type="button" class="rad-timeslot" style="padding: 9px 15px; box-sizing: border-box;">${timeSlot}</button>`;
  });
  timeSlotsWrapper.innerHTML = timeSlotsHTML;
  timeSlotsWrapper.style.display = "flex";
  //timeSlotsWrapper.style.gap = '0.5rem';
  timeSlotsWrapper.style.overflowY = "auto";
  timeSlotsWrapper.style.maxHeight = "calc(100vh - 296px)";

  const timeSlotButtons = document.querySelectorAll(".rad-timeslot");
  timeSlotButtons.forEach((button) => {
    button.addEventListener("click", () => {
      timeSlotButtons.forEach((button) => {
        button.classList.remove("selected");
      });
      button.classList.add("selected");
      const selectedTimeSlot = button.value;
      console.log("timeSlot value " + selectedTimeSlot);
    });
  });

  console.log("Available time slots " + availableTimeSlots);
}
