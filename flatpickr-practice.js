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
  const { open, close } = openingTimes[day];
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
