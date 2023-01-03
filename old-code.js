//---------------- FlatPickr---------------------------------------

let newDatum = "";
let newTime = "";

config = {
  defaultDate: toDay,
  minDate: "today",
  // enableTime: false,
  // time_24h: true,
  // minTime:"10:30",
  // maxTime:"17:45",
  altInput: true,
  altFormat: "M j, Y",
  dateFormat: "Y-m-d",
  disable: [
    function (date) {
      return date.getDay() === 0 || date.getDay() === 7;
    },
  ],
  locale: {
    firstDayOfWeek: 1,
  },
  onChange: function (dateStr) {
    let chosenDate = dateStr;
    let freshDate = chosenDate.toString();
    newDatum = freshDate.substring(0, 15);
    //newTime = freshDate.substring(16,21);
    //console.log("time is ", newTime);
    //console.log(dateStr);
    stepTwoDate.innerText = newDatum;
    //step2Time.innerText = newTime;
    dateCollected.setAttribute("value", newDatum);
    // timeCollected.setAttribute('value', newTime);
    //console.log(dateCollected.value);
    //priceCollected
    //timeCollected
  },
};

const fp = flatpickr(".input-date", config);

const tp = flatpickr(".input-time", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24h: true,
  minTime: "10:30",
  maxTime: "17:45",
  disableMobile: "true",
  onChange: function (dateStr) {
    let newchosenDate = dateStr;
    let newfreshDate = newchosenDate.toString();
    newTime = newfreshDate.substring(16, 21);
    step2Time.innerText = newTime;
    timeCollected.setAttribute("value", newTime);
  },
});