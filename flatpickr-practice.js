const openingTimes = {
  "Monday": { "open": "14:00", "close": "17:45" },
  "Tuesday": { "open": "10:00", "close": "17:45" },
  "Wednesday": { "open": "10:00", "close": "17:45" },  
  "Thursday": { "open": "10:00", "close": "17:45" }, 
  "Friday": { "open": "15:00", "close": "17:45" },
  "Saturday": { "open": "10:00", "close": "16:45" },
  "Sunday": { "open": null, "close": null },
  // other days of the week
}


flatpickr('#input-date', {
  dateFormat: "Y-m-d",
  locale: {
    firstDayOfWeek: 1,
  }
});

flatpickr('#input-time', {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  // other configuration options
});

document.getElementById('input-date').addEventListener('change', function() {
  // Get the selected date
  const selectedDate = this.value;
  // Check if the openingTimes object has a key for the selected date
  if (openingTimes.hasOwnProperty(selectedDate)) {
    // Get the opening and closing times for the selected day
    const { open, close } = openingTimes[selectedDate];
    // Check if the shop is open on the selected day
    if (open && close) {
      // Create Date objects from the opening and closing times
      const minTime = new Date();
      minTime.setHours(open.split(':')[0]);
      minTime.setMinutes(open.split(':')[1]);
      const maxTime = new Date();
      maxTime.setHours(close.split(':')[0]);
      maxTime.setMinutes(close.split(':')[1]);
      // Update the minTime and maxTime options of the time input field    
      flatpickr('#input-time', {
        minTime: minTime,
        maxTime: maxTime
      });
    }
  }
});




