console.log("faltpickr practice");


flatpickr('.input-date', {
  // your options here
});

flatpickr('.input-time', {
  enableTime: true,
  noCalendar: true,
  // other options here
});

document.querySelector('.input-time').addEventListener('change', function(event) {
  console.log("time change");

});

document.querySelector('.input-date').addEventListener('change', function(event) {
  console.log("day change");
  // Get the selected day from the event
  let day = event.target.value;

  // Get the time input element
  let timeInput = document.querySelector('.input-time');

  // Get the Flatpickr instance for the time input element
  let instance = flatpickr.getInstance(timeInput);

  // Set the minTime and maxTime options based on the selected day
  switch (day) {
    case 'Monday':
      instance.set('minTime', '14:00');
      instance.set('maxTime', '17:45');
      instance.set('defaultHour', 14);
      instance.set('defaultMinute', 0);
      break;
    case 'Friday':
      instance.set('minTime', '15:00');
      instance.set('maxTime', '17:45');
      instance.set('defaultHour', 15);
      instance.set('defaultMinute', 0);
      break;
    case 'Saturday':
      instance.set('minTime', '10:00');
      instance.set('maxTime', '16:45');
      instance.set('defaultHour', 10);
      instance.set('defaultMinute', 0);
      break;
    default:
      instance.set('minTime', '10:00');
      instance.set('maxTime', '17:45');
      instance.set('defaultHour', 10);
      timeInput.set('defaultMinute', 0);
      break;
  }
});
