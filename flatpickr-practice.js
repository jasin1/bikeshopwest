
  // Create a Flatpickr instance for the #input-date element
  var inputDate = flatpickr('#input-date', {
    // Set the onChange option to a function that updates the #input-time element
    onChange: function(selectedDates, dateStr, instance) {
      // Get the value of the selected day
      var selectedDay = dateStr.split(' ')[0];

      // Update the enableTime and time_24hr options of the #input-time element's Flatpickr instance
      switch(selectedDay) {
        case 'Monday':
          inputTime.set('enableTime', true);
          inputTime.set('time_24hr', true);
          inputTime.set('minTime', '14:00');
          inputTime.set('maxTime', '17:45');
          break;
        case 'Friday':
          inputTime.set('enableTime', true);
          inputTime.set('time_24hr', true);
          inputTime.set('minTime', '15:00');
          inputTime.set('maxTime', '17:45');
          break;
        case 'Saturday':
          inputTime.set('enableTime', true);
          inputTime.set('time_24hr', true);
          inputTime.set('minTime', '10:00');
          inputTime.set('maxTime', '16:45');
          break;
        case 'Sunday':
          inputTime.set('enableTime', false);
          break;
        default:
          inputTime.set('enableTime', true);
          inputTime.set('time_24hr', true);
          inputTime.set('minTime', '10:00');
          inputTime.set('maxTime', '17:45');
      }
    }
  });

  // Create a Flatpickr instance for the #input-time element
  var inputTime = flatpickr('#input-time', {
    enableTime: true,
    time_24hr: true,
    minTime: '10:00',
    maxTime: '17:45'
  });

  
