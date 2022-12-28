var timePicker = flatpickr('.input-time');


var datePicker = flatpickr('.input-date', {
  onChange: function(selectedDates, dateStr, instance) {
    // Get the selected date
    var selectedDate = new Date(dateStr);

    // Set the time picker options based on the selected date
    if (selectedDate.getDay() == 1) { // Monday
      timePicker.set({
        enable: [
          {
            from: "14:00",
            to: "17:45",
            daysOfWeek: [1]
          }
        ]
      });
    } else if (selectedDate.getDay() == 5) { // Friday
      timePicker.set({
        enable: [
          {
            from: "15:00",
            to: "17:45",
            daysOfWeek: [5]
          }
        ]
      });
    } else if (selectedDate.getDay() == 6) { // Saturday
      timePicker.set({
        enable: [
          {
            from: "10:00",
            to: "17:00",
            daysOfWeek: [6]
          }
        ]
      });
    } else { // Other days
      timePicker.set({
        enable: [
          {
            from: "10:00",
            to: "17:45"
          }
        ]
      });
    }
  }
});
