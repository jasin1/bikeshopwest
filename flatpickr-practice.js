flatpickr("#input-date", {
  onChange: function(selectedDates, dateStr, instance) {
    // this function will be called every time the user selects a new date
    updateTimeField(dateStr);  // call the updateTimeField function with the selected date
  }
});

function updateTimeField(dateStr) {
  // get the day of the week for the selected date
  var day = new Date(dateStr).getDay();

  // determine the open and closing times for the selected day
  var openTime, closingTime;
  switch (day) {
    case 1:  // Monday
      openTime = "14:00";
      closingTime = "17:45";
      break;
    case 5:  // Friday
      openTime = "15:00";
      closingTime = "17:45";
      break;
    case 6:  // Saturday
      openTime = "10:00";
      closingTime = "16:45";
      break;
    case 0:  // Sunday
      openTime = "";
      closingTime = "";
      break;
    default:  // all other days
      openTime = "10:00";
      closingTime = "17:45";
  }

  // set the value of the "input-time" field to the open time
  document.getElementById("input-time").value = openTime;

  // enable or disable the "input-time" field based on whether the shop is open or closed
  document.getElementById("input-time").disabled = (openTime === "");
}

function updateTimeField(dateStr) {
  // get the day of the week for the selected date
  var day = new Date(dateStr).getDay();

  // determine the open and closing times for the selected day
  var openTime, closingTime;
  switch (day) {
    case 1:  // Monday
      openTime = "14:00";
      closingTime = "17:45";
      break;
    case 5:  // Friday
      openTime = "15:00";
      closingTime = "17:45";
      break;
    case 6:  // Saturday
      openTime = "10:00";
      closingTime = "16:45";
      break;
    case 0:  // Sunday
      openTime = "";
      closingTime = "";
      break;
    default:  // all other days
      openTime = "10:00";
      closingTime = "17:45";
  }

  // set the value of the "input-time" field to the open time
  document.getElementById("input-time").value = openTime;

  // set the min and max attributes of the "input-time" field based on the open and closing times
  document.getElementById("input-time").min = openTime;
  document.getElementById("input-time").max = closingTime;

  // enable or disable the "input-time" field based on whether the shop is open or closed
  document.getElementById("input-time").disabled = (openTime === "");
}
