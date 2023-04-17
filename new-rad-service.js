window.addEventListener("load", function () {
  console.log("Rad start over");

  const radDescription = document.querySelector(".rad-step-description");
  const serviceButton = document.getElementById("rad-service-btn");
  const testButton = document.getElementById("rad-test-btn");
  const radFormFields = document.querySelectorAll(".form-field-wrapper");
  const backButton = document.querySelectorAll(".rad-back-btn");
  const timeSlotsWrapper = document.querySelector(".rad-timeslots-wrapper");
  const calendarInput = document.getElementById("rad-calendar");

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

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


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

  radFlatP = flatpickr(calendarInput, {
    enableTimes: false,
    dateFormat: "d.m.Y",
    minDate: "today",
    inline: true,
    maxDate: new Date().fp_incr(90),
    disable: [],
    onValueUpdate: function (selectedDates, dateStr, instance) {
      generateRadTimeSlots();
    },
  });

  serviceButton.addEventListener("click", function () {
    console.log("service btn clicked");
    serviceButton.classList.add("active");
    testButton.classList.remove("active");
    selectedButton = "service";
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
    testButton.classList.add("active");
    serviceButton.classList.remove("active");
    selectedButton = "test";
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
    if(selectedDates.length === 0){
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

    console.log("chosen times "+ times);

    // Clear the time slots wrapper
    timeSlotsWrapper.innerHTML = "";

    const startTime = new Date(`1/1/2021 ${times.open}`);
    const endTime = new Date(`1/1/2021 ${times.close}`);
    const timeSlots = [];
    while (startTime <= endTime) {
      timeSlots.push(
        startTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      );
      startTime.setTime(startTime.getTime() + 30 * 60000);

      // Create a button for each time slot and add it to the time slots wrapper
      timeSlots.forEach((time) => {
        const button = document.createElement("button");
        button.classList.add("rad-timeslot");
        button.textContent = time;
        timeSlotsWrapper.appendChild(button);
      });
    }
  }
});
