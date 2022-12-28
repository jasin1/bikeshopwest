console.log("faltpickr practice");


let MydayPickr = document.querySelector(".input-date");
let MytimePickr = document.querySelector(".input-time");

flatpickr(MydayPickr, {
  // your options here
});

flatpickr(MytimePickr , {
  enableTime: true,
  noCalendar: true,
  // other options here
});

document.querySelector(MytimePickr).addEventListener('change', function(event) {
  console.log("time change");

});

document.querySelector(MydayPickr).addEventListener('change', function(event) {
  console.log("day change");
  // Get the selected day from the event
  let day = event.target.value;

  // Get the Flatpickr instance for the time input element
  let instance = flatpickr.getInstance(MytimePickr);

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
