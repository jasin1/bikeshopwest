
flatpickr(".input-time", {
  enableTime: true,
  noCalendar: true,
  // other options here
});


flatpickr(".input-date", {
  minDate: "today",
  altInput: true,
  altFormat: "M j, Y",
  dateFormat: "Y-m-d",
  // other options here
  onChange: function(selectedDates, dateStr, instance) {
    console.log("date picked");
    // get the day of the week for the selected date
    let dayOfWeek = instance.formatDate(selectedDates[0], "N");
    let startTime = "10:00"; // default start time

    // update start time based on the day of the week
    if (dayOfWeek == 1) { // Monday
      startTime = "14:00";
    } else if (dayOfWeek == 5) { // Friday
      startTime = "15:00";
    } else if (dayOfWeek == 6) { // Saturday
      startTime = "10:00";
    }

    // update the start time in the time input field
    document.querySelector(".input-time").value = startTime;
  }
});
