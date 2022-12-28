console.log("faltpickr practice");

const fp = flatpickr('.input-day', {
  onChange: function(selectedDates, dateStr, instance) {
    // Get the selected day of the week (0-6, with 0 being Sunday)
    var dayOfWeek = instance.selectedDates[0].getDay();

    // Set the min and max time options based on the selected day
    var minTime, maxTime;
    if (dayOfWeek == 1) {  // Monday
      minTime = "14:00";
      maxTime = "17:45";
    } else if (dayOfWeek == 5) {  // Friday
      minTime = "15:00";
      maxTime = "17:45";
    } else if (dayOfWeek == 6) {  // Saturday
      minTime = "10:00";
      maxTime = "17:00";
    } else {  // Other days
      minTime = "10:00";
      maxTime = "17:45";
    }

    // Update the input-time field with the new min and max times
    flatpickr('.input-time', {
      minTime: minTime,
      maxTime: maxTime
    });
  }
});
