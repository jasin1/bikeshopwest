console.log("faltpickr practice");



// Initialize the day picker
const dayPicker = flatpickr(".input-day", {
  onChange: function(selectedDates, dateStr, instance) {
    // Get the selected day of the week
    const selectedDay = instance.currentYearElement.textContent + "-" + instance.currentMonth.textContent + "-" + instance.currentDayElement.textContent;
    const dayOfWeek = new Date(selectedDay).getDay();

    // Set the availability of the time picker based on the selected day
    switch (dayOfWeek) {
      case 1: // Monday
        timePicker.set("enable", [
          {
            from: "14:00",
            to: "17:45",
            daysOfWeek: [1]
          }
        ]);
        timePicker.set("disable", [
          {
            from: "00:00",
            to: "14:00",
            daysOfWeek: [1]
          },
          {
            from: "17:45",
            to: "24:00",
            daysOfWeek: [1]
          }
        ]);
        break;
      case 5: // Friday
        timePicker.set("enable", [
          {
            from: "15:00",
            to: "17:45",
            daysOfWeek: [5]
          }
        ]);
        timePicker.set("disable", [
          {
            from: "00:00",
            to: "15:00",
            daysOfWeek: [5]
          },
          {
            from: "17:45",
            to: "24:00",
            daysOfWeek: [5]
          }
        ]);
        break;
      case 6: // Saturday
        timePicker.set("enable", [
          {
            from: "10:00",
            to: "17:00",
            daysOfWeek: [6]
          }
        ]);
        timePicker.set("disable", [
          {
            from: "00:00",
            to: "10:00",
            daysOfWeek: [6]
          },
          {
            from: "17:00",
            to: "24:00",
            daysOfWeek: [6]
          }
        ]);
        break;
      default: // Other days of the week
        timePicker.set("enable", [
          {
            from: "10:00",
            to: "17:45",
            daysOfWeek: [0, 2, 3, 4]
          }
        ]);

    }

  }
});

