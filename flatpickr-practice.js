// Get the input fields
const inputDate = document.querySelector('#input-date');
const inputTime = document.querySelector('#input-time');

// Initialize Flatpickr on the input fields
flatpickr(inputDate, {});
flatpickr(inputTime, {
  noCalendar: true,
  enableTime: true
});

// Set the default minTime and maxTime options for the inputTime field
inputTime.flatpickr.set('minTime', '10:00');
inputTime.flatpickr.set('maxTime', '17:45');

// Add an event listener for the onChange event of the inputDate field
inputDate.addEventListener('change', (event) => {
  // Get the selected date
  const selectedDate = event.target.value;

  // Set the minTime and maxTime options for the inputTime field based on the selected date
  if (selectedDate) {
    const dayOfWeek = new Date(selectedDate).getDay();
    if (dayOfWeek === 1) {
      inputTime.flatpickr.set('minTime', '14:00');
      inputTime.flatpickr.set('maxTime', '17:45');
    } else if (dayOfWeek === 5) {
      inputTime.flatpickr.set('minTime', '15:00');
      inputTime.flatpickr.set('maxTime', '17:45');
    } else if (dayOfWeek === 6) {
      inputTime.flatpickr.set('minTime', '10:00');
      inputTime.flatpickr.set('maxTime', '16:45');
    } else {
      inputTime.flatpickr.set('minTime', '10:00');
      inputTime.flatpickr.set('maxTime', '17:45');
    }
  }
});
