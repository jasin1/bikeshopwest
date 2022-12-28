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
      instance.setAttribute('minTime', '14:00');
      instance.setAttribute('maxTime', '17:45');
      instance.setAttribute('defaultHour', 14);
      instance.setAttribute('defaultMinute', 0);
      break;
    case 'Friday':
      instance.setAttribute('minTime', '15:00');
      instance.setAttribute('maxTime', '17:45');
      instance.setAttribute('defaultHour', 15);
      instance.setAttribute('defaultMinute', 0);
      break;
    case 'Saturday':
      instance.setAttribute('minTime', '10:00');
      instance.setAttribute('maxTime', '16:45');
      instance.setAttribute('defaultHour', 10);
      instance.setAttribute('defaultMinute', 0);
      break;
    default:
      instance.setAttribute('minTime', '10:00');
      instance.setAttribute('maxTime', '17:45');
      instance.setAttribute('defaultHour', 10);
      timeInput.setAttribute('defaultMinute', 0);
      break;
  }
});
