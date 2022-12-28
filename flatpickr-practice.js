let MydayPickr = document.querySelector(".input-date");
let MytimePickr = document.querySelector(".input-time");

flatpickr(MydayPickr, {
  onChange: function(selectedDates, dateStr, instance) {
    // Set the data-day attribute to the name of the day
    instance.input.setAttribute('data-day', instance.formatDate(selectedDates[0], 'dddd'));

    // Get the selected day from the data-day attribute
    let day = instance.input.getAttribute('data-day');

    // Get the Flatpickr instance for the time input element
    let timeInstance = flatpickr.getInstance(MytimePickr);

    // Set the minTime and maxTime options based on the selected day
    switch (day) {
      case 'Monday':
        timeInstance.set('minTime', '14:00');
        timeInstance.set('maxTime', '17:45');
        timeInstance.set('defaultDate', '14:00');
        break;
      case 'Friday':
        timeInstance.set('minTime', '15:00');
        timeInstance.set('maxTime', '17:45');
        timeInstance.set('defaultDate', '15:00');
        break;
      case 'Saturday':
        timeInstance.set('minTime', '10:00');
        timeInstance.set('maxTime', '16:45');
        timeInstance.set('defaultDate', '10:00');
        break;
      default:
        timeInstance.set('minTime', '10:00');
        timeInstance.set('maxTime', '17:45');
        timeInstance.set('defaultDate', '10:00');
        break;
    }
  }
});

flatpickr(MytimePickr , {
  enableTime: true,
  noCalendar: true,
});
