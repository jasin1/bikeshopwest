let MydayPickr = document.querySelector(".input-date");
let MytimePickr = document.querySelector(".input-time");

flatpickr(MydayPickr, {
  onChange: function(selectedDates, dateStr, instance) {
    // Set the data-day attribute to the name of the day
    instance.input.setAttribute('data-day', instance.formatDate(selectedDates[0], 'dddd'));

    // Get the selected day from the data-day attribute
    let day = instance.input.getAttribute('data-day');

    // Set the minTime and maxTime options based on the selected day
    let timeOptions = {
      enableTime: true,
      noCalendar: true,
    };
    switch (day) {
      case 'Monday':
        timeOptions.minTime = '14:00';
        timeOptions.maxTime = '17:45';
        timeOptions.defaultDate = '14:00';
        break;
      case 'Friday':
        timeOptions.minTime = '15:00';
        timeOptions.maxTime = '17:45';
        timeOptions.defaultDate = '15:00';
        break;
      case 'Saturday':
        timeOptions.minTime = '10:00';
        timeOptions.maxTime = '16:45';
        timeOptions.defaultDate = '10:00';
        break;
      default:
        timeOptions.minTime = '10:00';
        timeOptions.maxTime = '17:45';
        timeOptions.defaultDate = '10:00';
        break;
    }

    // Create a new Flatpickr instance for the time picker
    flatpickr(MytimePickr , timeOptions);
  }
});
