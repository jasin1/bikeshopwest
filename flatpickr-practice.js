// First, you'll need to include the date-fns library in your HTML file
// You can do this by adding the following script tag to your HTML:
// <script src="https://cdn.jsdelivr.net/npm/date-fns@2.16.1/dist/date-fns.min.js"></script>

// Set the default opening and closing times for each day of the week
const defaultOpeningTimes = {
  monday: {
    opening: '14:00',
    closing: '17:45',
  },
  tuesday: {
    opening: '10:00',
    closing: '17:45',
  },
  wednesday: {
    opening: '10:00',
    closing: '17:45',
  },
  thursday: {
    opening: '10:00',
    closing: '17:45',
  },
  friday: {
    opening: '15:00',
    closing: '17:45',
  },
  saturday: {
    opening: '10:00',
    closing: '16:45',
  },
  sunday: {
    opening: '10:00',
    closing: '17:45',
  },
};

// Get a reference to the input fields
const inputDate = document.querySelector('#input-date');
const inputTime = document.querySelector('#input-time');

// Set the default value for the input time field to the opening time for Monday
inputTime.value = defaultOpeningTimes.monday.opening;

// Add an event listener to the input date field
inputDate.addEventListener('change', (event) => {
  // Get the selected day of the week
  const selectedDate = new Date(event.target.value);
  const selectedDay = getDay(selectedDate);
  console.log(selectedDay);

  // Get the opening and closing times for the selected day
  const openingTime = defaultOpeningTimes[selectedDay].opening;
  const closingTime = defaultOpeningTimes[selectedDay].closing;
  console.log(openingTime, closingTime);

  // Update the value of the input time field
  inputTime.value = openingTime;

  // Set the min and max attributes for the input time field
  // to restrict the range of times that can be selected
  inputTime.min = openingTime;
  inputTime.max = closingTime;
});
