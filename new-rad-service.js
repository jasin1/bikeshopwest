window.addEventListener("load", function () {
  console.log("Rad start over");

  const radDescription = document.querySelector(".rad-step-description");
  const serviceButton = document.getElementById("rad-service-btn");
  const testButton = document.getElementById("rad-test-btn");
  const radFormFields = document.querySelectorAll(".form-field-wrapper");
  const backButton = document.querySelectorAll(".rad-back-btn");
  const timeSlotsWrapper = document.querySelector(".rad-timeslots-wrapper");
  const calendarInput = document.getElementById("rad-calendar");
  const selectedDay = document.getElementById("selected-day");

  const radServiceTimes = {
    Monday: { open: "14:00", close: "17:45" },
    Tuesday: { open: "10:00", close: "17:45" },
    Wednesday: { open: "10:00", close: "17:45" },
    Thursday: { open: "10:00", close: "17:45" },
    Friday: { open: "15:00", close: "17:45" },
    Saturday: { open: "10:00", close: "16:45" },
    Sunday: { open: "", close: "" },
  };
  const radTestTimes = {
    Tuesday: { open: "12:00", close: "14:00" },
    Thursday: { open: "12:00", close: "14:00" },
    Saturday: { open: "11:00", close: "15:00" },
    Sunday: { open: "", close: "" },
    Monday: { open: "", close: "" },
    Wednesday: { open: "", close: "" },
    Friday: { open: "", close: "" },
  };

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //------------- Steps logic -------------------------------------//
  const step2BackButton = document.getElementById("step-2-back-btn");
  const step2NextButton = document.getElementById("step-2-next-btn");
  const step3BackButton = document.getElementById("step-3-back-btn");
  const radSteps = document.querySelectorAll(".rad-selection");
  //let currentRadStep = 0;

  radSteps.forEach((step, index) => {
    if (index != 0) {
      step.style.display = "none";
    }
  });

  function showStep(currentStep, nextStep) {
    const currentStepElement = document.getElementById(
      `rad-form-step-${currentStep}`,
    );
    const nextStepElement = document.getElementById(
      `rad-form-step-${nextStep}`,
    );

    currentStepElement.classList.remove("active");
    currentStepElement.style.display = "none";
    nextStepElement.classList.add("active");
    nextStepElement.style.display = "block";


  }

  step2BackButton.addEventListener("click", () => {
    showStep(2, 1);
  });

  step2NextButton.addEventListener("click", () => {
    console.log("step2NextButton");
    showStep(2, 3);
  });

  step3BackButton.addEventListener("click", () => {
    showStep(3, 2);
  });

  //------------- make a choice in step 1 ---------------//

  let notTheseDays = {
    service: [0], // Sunday
    test: [0, 1, 3, 5], // Sunday, Monday, Wednesday, Friday
  };

  let selectedButton = "";

  let radFlatP;

  //Before creating a new flatpickr instance, destroy the old one if it exists
  if (radFlatP) {
    radFlatP.destroy();
  }
  let radSelectedDate = new Date();

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  radFlatP = flatpickr(calendarInput, {
    enableTimes: false,
    dateFormat: "d.m.Y",
    minDate: "today",
    inline: true,
    maxDate: new Date().fp_incr(90),
    disable: [],
    onValueUpdate: function (selectedDates, dateStr, instance) {
      radSelectedDate = selectedDates[0];
      //selectedDay.value = radSelectedDate;
      generateRadTimeSlots();
      if (radSelectedDate) {
        console.log("selected date is " + formatDate(radSelectedDate));
        selectedDay.value = formatDate(radSelectedDate);
      }
    },
  });

  serviceButton.addEventListener("click", function () {
    console.log("service btn clicked");
    showStep(1, 2);
    serviceButton.classList.add("active");
    testButton.classList.remove("active");
    selectedButton = "service";

    document.getElementById("rad-bike-select").style.display = "none";
    document.getElementById("rad-service-select").style.display = "block";

    radFlatP.set("disable", [
      function (date) {
        const dayOfWeek = date.getDay();
        return notTheseDays.service.includes(dayOfWeek);
      },
    ]);
    //radFlatP.redraw();
  });

  testButton.addEventListener("click", function () {
    console.log("test btn clicked");
    showStep(1, 2);
    testButton.classList.add("active");
    serviceButton.classList.remove("active");
    selectedButton = "test";

    document.getElementById("rad-bike-select").style.display = "block";
    document.getElementById("rad-service-select").style.display = "none";

    radFlatP.set("disable", [
      function (date) {
        const dayOfWeek = date.getDay();
        return notTheseDays.test.includes(dayOfWeek);
      },
    ]);
    //radFlatP.redraw();
  });

  //-------------------- TimeSlots ---------------------//

  function generateRadTimeSlots() {
    // Get the selected date from the flatpickr instance
    const selectedDates = radFlatP.selectedDates;
    if (selectedDates.length === 0) {
      return;
    }
    const selectedDate = selectedDates[0];

    // Get the selected day of the week (0 for Sunday, 1 for Monday, etc.)
    const selectedDayOfWeek = selectedDate.getDay();

    // Get the open and close times for the selected day from the appropriate object based on the selected button
    const times =
      selectedButton === "service"
        ? radServiceTimes[daysOfWeek[selectedDayOfWeek]]
        : radTestTimes[daysOfWeek[selectedDayOfWeek]];

    // Get the start and end times for the day
    const startDate = new Date(selectedDate);
    startDate.setHours(
      times.open.split(":")[0],
      times.open.split(":")[1],
      0,
      0,
    );
    const endDate = new Date(selectedDate);
    endDate.setHours(
      times.close.split(":")[0],
      times.close.split(":")[1],
      0,
      0,
    );

    // Clear the time slots wrapper
    timeSlotsWrapper.innerHTML = "";

    // const startTime = new Date(`1/1/2021 ${times.open}`);
    // const endTime = new Date(`1/1/2021 ${times.close}`);
    // Generate time slots that fall within the start and end times for the day
    const timeSlots = [];
    let currentTime = startDate;
    while (currentTime < endDate) {
      timeSlots.push(
        currentTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        }),
      );
      currentTime.setTime(currentTime.getTime() + 30 * 60000);
    }

    timeSlots.forEach((time) => {
      const button = document.createElement("button");
      button.classList.add("rad-timeslot");
      button.textContent = time;
      button.style.padding = "9px 15px";
      button.style.fontFamily = "Work Sans";
      // Add click event listener to the button
      button.addEventListener("click", (event) => {
        event.preventDefault();
        // Remove the selected class from all buttons
        const buttons = timeSlotsWrapper.querySelectorAll(".rad-timeslot");
        buttons.forEach((btn) => {
          if (btn !== button) {
            btn.classList.remove("selected");
            btn.style.color = "#242424";
            btn.style.backgroundColor = "#fff";
          } else {
            btn.classList.add("selected");
            btn.style.color = "#fff";
            btn.style.backgroundColor = "#ed1e24";
            const selectedTimeInput =
              document.getElementById("selected-time-slot");
            selectedTimeInput.value = time;
            console.log("selected time is " + selectedTimeInput.value);
          }
        });
      });

      timeSlotsWrapper.appendChild(button);
    });
  }
});
