function init() {
 
  const inputDate = document.querySelector(".input-date");
  const inputTime = document.querySelector(".input-time");

  // An object containing the opening and closing times for each day of the week
  const openingTimes = {
    Monday: {
      open: "14:00",
      close: "17:45",
    },
    Friday: {
      open: "15:00",
      close: "17:45",
    },
    Saturday: {
      open: "10:00",
      close: "16:45",
    },
    // Set the default opening times for the rest of the days
    default: {
      open: "10:00",
      close: "17:45",
    },
  };

  // Listen for changes in the input-date field
  inputDate.addEventListener("change", () => {
    // Get the selected day
    const selectedDay = inputDate.value;

    // Get the opening and closing times for the selected day
    let { open, close } = openingTimes[selectedDay] || openingTimes.default;

    // Set the minimum and maximum allowed times in the input-time field
    inputTime.min = open;
    inputTime.max = close;

    // Update the options in the input-time field
    updateTimeOptions(open, close);
  });

  function updateTimeOptions(open, close) {
    // Convert the opening and closing times to Date objects
    const start = new Date("1970-01-01T" + open + "Z");
    const end = new Date("1970-01-01T" + close + "Z");

    // Calculate the difference between the start and end times in minutes
    const diffMinutes = (end - start) / (60 * 1000);

    // Clear the current options in the input-time field
    inputTime.innerHTML = "";

    // Add a new option for each minute between the start and end times
    for (let i = 0; i <= diffMinutes; i++) {
      const option = document.createElement("option");
      option.value = formatTime(new Date(start.getTime() + i * 60000));
      option.text = option.value;
      inputTime.appendChild(option);
    }
  }

  // Format a Date object as a string in the HH:MM format
  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes}`;
  }
}

// Wait for the DOM to be ready before running the init function
document.addEventListener('DOMContentLoaded', init);
