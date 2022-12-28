const inputDate = document.querySelector('#input-date');
const inputTime = document.querySelector('#input-time');

flatpickr(inputDate, {
  disable: [
    (date) => date.getDay() === 0, // disable Sundays
  ],
});


//inputDate.addEventListener

// Define the opening and closing times for each day of the week
const openingHours = {
  Monday: { open: "14:00", close: "17:45" },
  Tuesday: { open: "10:00", close: "17:45" },
  Wednesday: { open: "10:00", close: "17:45" },
  Thursday: { open: "10:00", close: "17:45" },
  Friday: { open: "15:00", close: "17:45" },
  Saturday: { open: "10:00", close: "16:45" },
  Sunday: { open: "", close: "" } // Closed on Sunday
};

// Bind an event listener to the #input-date element
inputDate.addEventListener("change", function(event) {
  // Get the selected date
  const selectedDate = event.target.value;

  // Get the opening and closing times for the selected date
  const { open, close } = openingHours[selectedDate];

  // Get the #input-time dropdown element
  const inputTime = document.querySelector("#input-time");

  // Remove all existing options from the dropdown
  inputTime.innerHTML = "";

  // Calculate the number of 30-minute increments between the opening and closing times
  const startTime = new Date("1970-01-01 " + open + ":00");
  const endTime = new Date("1970-01-01 " + close + ":00");
  const increments = (endTime - startTime) / (1000 * 60 * 30);

  // Add a new option for each 30-minute increment
  for (let i = 0; i <= increments; i++) {
    const option = document.createElement("option");
    option.value = startTime.toTimeString().substring(0, 5);
    option.text = option.value;
    inputTime.add(option);

    // Increment the start time by 30 minutes
    startTime.setMinutes(startTime.getMinutes() + 30);
  }
});
