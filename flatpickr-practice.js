 // Define the opening times for each day of the week
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

// Initialize the Pikaday date picker
const datePicker = new Pikaday({
  field: document.getElementById('input-date'),
  format: 'YYYY-MM-DD',
  firstDay: 1, // Set the first day of the week to Monday
});

// Initialize the time picker
const timePicker = new Pikaday({
  field: document.getElementById('input-time'),
  format: 'HH:mm',
  noCalendar: true,
});

// When the selected date changes, update the minTime and maxTime options of the time picker
datePicker.on('change', function() {
  // Get the selected date
  const selectedDate = this.toString();
  // Check if the openingTimes object has a key for the selected date
  if (openingTimes.hasOwnProperty(selectedDate)) {
    // Get the opening and closing times for the selected day
    const { open, close } = openingTimes[selectedDate];
    // Check if the shop is open on the selected day
    if (open && close) {
      // Update the minTime and maxTime options of the time picker
      timePicker.setMinTime(open);
      timePicker.setMaxTime(close);
    }
  }
});