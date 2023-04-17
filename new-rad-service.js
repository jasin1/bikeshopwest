

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

  //------------- make a choice in step 1 ---------------//

  let notTheseDays = {
    service: [0],// Sunday
    test: [0, 1, 3, 5],// Sunday, Monday, Wednesday, Friday
  };
  
  // Before creating a new flatpickr instance, destroy the old one if it exists
  if (radFlatP) {
    radFlatP.destroy();
  }

  const radFlatP = flatpickr(calendarInput, {
    enableTimes: false,
    dateFormat: "d.m.Y",
    minDate: "today",
    inline: true,
    maxDate: new Date().fp_incr(90),
    disable: [0, 1, 3, 5],
  });

  serviceButton.addEventListener("click", function () {
    console.log("service btn clicked");
    serviceButton.classList.add("active");
    testButton.classList.remove("active");
    //radFlatP.set("disable", notTheseDays.service);
    //radFlatP.redraw();
  });

  testButton.addEventListener("click", function () {
    console.log("test btn clicked");
    testButton.classList.add("active");
    serviceButton.classList.remove("active");
    //radFlatP.set("disable", notTheseDays.test);
    //radFlatP.redraw();
  });
});
