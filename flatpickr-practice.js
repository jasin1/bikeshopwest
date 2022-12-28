const inputDate = document.querySelector('#input-date');
const inputTime = document.querySelector('#input-time');

if (inputTime === null) {
  console.error('Error: inputTime element not found');
}

const openingTimes = {
  'Monday': {
    minDate: '14:00',
    maxDate: '17:45'
  },
  'Friday': {
    minDate: '15:00',
    maxDate: '17:45'
  },
  'Saturday': {
    minDate: '10:00',
    maxDate: '16:45'
  },
  'default': {
    minDate: '10:00',
    maxDate: '17:45'
  }
};

const setOpeningTimes = (day) => {
  let minDate = openingTimes[day]?.minDate || openingTimes['default'].minDate;
  let maxDate = openingTimes[day]?.maxDate || openingTimes['default'].maxDate;

  // update the minDate and maxDate properties of the inputTime Flatpickr instance
  inputTime.flatpickr.set('minDate', minDate);
  inputTime.flatpickr.set('maxDate', maxDate);
};

inputDate.addEventListener('change', (event) => {
  const day = event.target.value;
  setOpeningTimes(day);
});

// initialize Flatpickr for both input fields
flatpickr(inputDate, {
  altFormat: "M j, Y",
  dateFormat: "Y-m-d",
});

flatpickr(inputTime, {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24h: true,
});
