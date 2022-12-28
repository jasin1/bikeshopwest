console.log("flatpickr practice");

//----- Modal variables---------------------------

let openBtn1 = document.querySelector(".bike-img-wrapper-1");
let openBtn2 = document.querySelector(".bike-img-wrapper-2");
let openBtn3 = document.querySelector(".bike-img-wrapper-3");
let openBtn4 = document.querySelector(".bike-img-wrapper-4");

const bikeBtns = [openBtn1, openBtn2, openBtn3, openBtn4];

const modalBookBtn = document.querySelector(".button-book-4");

const prevBtn = document.querySelectorAll(".button-prev");
const nextBtn = [...document.querySelectorAll(".button-next")];
const formSteps = [...document.querySelectorAll(".tab")];

const bookBtn1 = document.querySelector(".button-book-1");
const bookBtn2 = document.querySelector(".button-book-2");
const bookBtn3 = document.querySelector(".button-book-3");
const bookBtn4 = document.querySelector(".button-book-new");

const bookBtns = [bookBtn1, bookBtn2, bookBtn3, bookBtn4];

const modalTxt = document.querySelector(".modal-txt-wrapper");
const modalImg = document.querySelector(".modal-main-img");

// --------- Steps variables ----------------------

const bikeHeading = document.querySelector(".step-1-heading");
const newHeading = document.querySelector(".new-selected-heading");
const newHeading2 = document.querySelector(".new-selected-heading2");

const stepTwoImg = document.querySelector(".step-2-img");
const stepTwoDate = document.querySelector(".step-2-date");
const stepThreeImg = document.querySelector(".step-3-img");

const bikeSelectedImg = document.querySelector(".selected-bike-img");
const bikePrice1 = document.querySelector(".step-1-price-1");
const bikePrice2 = document.querySelector(".step-1-price-2");
const totalPrice = document.querySelector(".total-price-calc");
const totalPrice2 = document.querySelector(".total-price-calc-2");
const selectedDate = document.querySelector(".step-2-date");

//------------- Collecting inputs to send with form---------------------
const selectedDays = document.getElementById("form-select-input");
const dateCollected = document.querySelector(".date-colect-input");
const priceCollected = document.querySelector(".price-colect-input");
const timeCollected = document.querySelector(".time-colect-input");
const DurationCollected = document.querySelector(".duration-input");
//const BikeAmountCollected = document.querySelector(".bike-amount-input");
//-----------------------------------------------------------------------
const step2duration = document.querySelector(".step-2-duration");
const step2Time = document.querySelector(".step-2-time");
const step2Bikes = document.querySelector(".step-2-total-bikes");
const checksWrapper = document.querySelector(".accessoires-select-wrapper");

const rentalTop = document.querySelector(".rental-top-text");

let toDay = "";

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
