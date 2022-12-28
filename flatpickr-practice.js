const openingTimes = {
  Monday: { open: "14:00", close: "17:45" },
  Tuesday: { open: "10:00", close: "17:45" },
  Wednesday: { open: "10:00", close: "17:45" },
  Thursday: { open: "10:00", close: "17:45" },
  Friday: { open: "15:00", close: "17:45" },
  Saturday: { open: "10:00", close: "16:45" },
  Sunday: { open: "", close: "" }
};


function getAvailableTimes(day) {
  // Check if the day is a valid key in the openingTimes object
  if (!openingTimes[day]) {
    // If the day is not a valid key, return an empty array
    return [];
  }

  // If the day is a valid key, get the open and close times for that day
  const { open, close } = openingTimes[day];

  // Calculate the available times in 30 minute increments
  let startTime = new Date("1970-01-01 " + open);
  let endTime = new Date("1970-01-01 " + close);
  let availableTimes = [];
  while (startTime <= endTime) {
    availableTimes.push(startTime.toTimeString().substring(0, 5));
    startTime.setMinutes(startTime.getMinutes() + 30);
  }
  return availableTimes;
}



flatpickr("#input-date", {

  defaultDate: toDay,
  minDate: "today",
  altInput: true,
  altFormat: "M j, Y",
  dateFormat: "Y-m-d",
  disable: [
    function (date) {
      return date.getDay() === 0 || date.getDay() === 7;
    },
  ],
  
  onChange: function(selectedDates, dateStr, instance) {
    // Get the day of the week for the selected date
    let dayOfWeek = new Date(dateStr).toLocaleString("en-US", { weekday: "long" });

    // Get the available times for the selected day
    let availableTimes = getAvailableTimes(dayOfWeek);

    // Clear the current options in the #input-time dropdown
    let inputTime = document.querySelector("#input-time");
    inputTime.innerHTML = "";

    // Add the available times as options in the #input-time dropdown
    availableTimes.forEach(time => {
      let option = document.createElement("option");
      option.value = time;
      option.text = time;
      inputTime.add(option);
    });
  }
});
