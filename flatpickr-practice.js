flatpickr('.input-date', {
  // other configuration options
});

flatpickr('.input-time', {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  // other configuration options
});


const openingTimes = {
  "Monday": { "open": "14:00", "close": "17:45" },
  "Tuesday": { "open": "10:00", "close": "17:45" },
  "Wednesday": { "open": "10:00", "close": "17:45" },  
  "Thursday": { "open": "10:00", "close": "17:45" }, 
  "Friday": { "open": "15:00", "close": "17:45" },
  "Saturday": { "open": "10:00", "close": "16:45" },
  // other days of the week
}

document.getElementById('input-date').addEventListener('change', function() {
  // Get the selected date
  const selectedDate = this.value;
  // Get the opening and closing times for the selected day
  const { open, close } = openingTimes[selectedDate];

  const minTime = new Date(Date.parse(open));
  const maxTime = new Date(Date.parse(close));

  // Update the minTime and maxTime options of the time input field
  flatpickr('#input-time', {
    minTime: minTime,
    maxTime: maxTime
  });
});
