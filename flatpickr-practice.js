const inputDate = document.querySelector('#input-date');
const inputTime = document.querySelector('#input-time');

flatpickr(inputDate, {
  disable: [
    (date) => date.getDay() === 0, // disable Sundays
  ],
});


inputDate.addEventListener('change', (event) => {
  const selectedDate = event.target.value;
  const dayOfWeek = new Date(selectedDate).getDay();

  let openingTime;
  let closingTime;

  switch (dayOfWeek) {
    case 1: // Monday
      openingTime = '14:00';
      closingTime = '17:45';
      break;
    case 5: // Friday
      openingTime = '15:00';
      closingTime = '17:45';
      break;
    case 6: // Saturday
      openingTime = '10:00';
      closingTime = '16:45';
      break;
    case 0: // Sunday
      // disable the inputTime element and exit the function
      inputTime.setAttribute('disabled', 'disabled');
      return;
    default: // all other days
      openingTime = '10:00';
      closingTime = '17:45';
      break;
  }

  // update the default time for the inputTime element
  inputTime.value = openingTime;

  // set the minimum and maximum times that can be selected in the inputTime element
  inputTime.setAttribute('min', openingTime);
  inputTime.setAttribute('max', closingTime);
});
