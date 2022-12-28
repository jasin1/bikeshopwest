console.log("faltpickr practice");


flatpickr('.input-date', {
  // your options here
});

flatpickr('.input-time', {
  enableTime: true,
  noCalendar: true,
  // other options here
});

document.querySelector('.input-date').addEventListener('change', function(event) {
  console.log("day change");
  // Get the selected day from the event
  let day = event.target.value;

  // Get the time input element
  let timeInput = document.querySelector('.input-time');

  // Set the minTime and maxTime options based on the selected day
  switch (day) {
    case 'Monday':
      timeInput.setAttribute('minTime', '14:00');
      timeInput.setAttribute('maxTime', '17:45');
      break;
    case 'Friday':
      timeInput.setAttribute('minTime', '15:00');
      timeInput.setAttribute('maxTime', '17:45');
      break;
    case 'Saturday':
      timeInput.setAttribute('minTime', '10:00');
      timeInput.setAttribute('maxTime', '16:45');
      break;
    default:
      timeInput.setAttribute('minTime', '10:00');
      timeInput.setAttribute('maxTime', '17:45');
      break;
  }
});
