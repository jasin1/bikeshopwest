console.log("We are in!!");

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

// let dayValue = selectedDays.options[select.selectedIndex].value;

let numBike = Number;

//-------------------------------

let bikeItemsData = [
  {
    id: "bike01",
    name: "Touring Bike",
    price1: 13,
    price2: 9,
    dif: 4,
    descShort: "Handbrake bike with 7 speed hub and hand-oparated hand rakes",
    descLong:
      "Handbrake bike elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    step2img:
      "https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62fe36981365fab92022f3a6_hand_break_proper.jpg",
    step3img:
      "https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62fe36981365fab92022f3a6_hand_break_proper.jpg",
    //https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62fe36981365fab92022f3a6_hand_break_proper.jpg

    //https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62e92b671a593f0066953f63_big-footbrake.jpg
    //https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62c687a7edcb7f2c57d8af9b_hand-bike_optimized.jpg
  },
  {
    id: "bike02",
    name: "Electric Bike",
    price1: 35,
    price2: 30,
    dif: 5,
    descShort: "Duis cursus, mi quis viverra ornare",
    descLong:
      "Electric bike adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    step2img:
      "https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/6332b6dd59711133dc2a5010_new-elec-bike.jpg",
    step3img:
      "https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/6332b6dd59711133dc2a5010_new-elec-bike.jpg",
  },
  {
    id: "bike03",
    name: "Cargo Bike",
    price1: 25,
    price2: 22,
    dif: 3,
    descShort:
      "The cargo bike comes with 7 gears and is suitable for the maximum of 2 children",
    descLong:
      "Cargo Bike adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    step2img:
      "https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/6332b6182297732b0e6f8597_new-cargo-bike.jpg",
    step3img:
      "https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/6332b6182297732b0e6f8597_new-cargo-bike.jpg",
  },
  {
    id: "bike04",
    name: "Mother's bike",
    price1: 18,
    price2: 12,
    dif: 6,
    descShort:
      "In addition we have special bicycles for rent such as parent- child tandems, regular tandems and more Bikes....",
    descLong:
      "We have bicycles in all shapes and sizes. We Rent City Bikes with backpedal brake and with handbrake and gears. In addition we have special bicycles for rent such as parent- child tandems, regular tandems and Cargo bikes. In order to make sure that the little ones can also take part, we also rent out bikes with child seats.",
    step2img:
      "https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/6332b3566d57c4fa033a1ed1_new-moeder-fiets.jpg",
    step3img:
      "https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/6332b3566d57c4fa033a1ed1_new-moeder-fiets.jpg",
  },
];

let formStepsNum = 0;
let selectedBikeNum = 0;

let modalContainer = document.getElementById("bike-modal-wrapper");
let modal = document.getElementById("modal-content");
let closeBtn = document.getElementById("modal-close-wrapper");

//------------ Tabs -------------------------------------

let selectedDayValue;
let theValue = 0;
let bikeNum = Number;

let checkedPrice = 0;
let bigTotal = 0;

let checkedValue = 0;
let numtje = 0;

let sum = 0;
let totalVal = 0;
let totalCheckedVal = 0;
let BikeCounter = 1;

//------------------ add-ons --------------------------------------------//

const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");

const checks = [check1, check2, check3];

const selectedCheck1 = document.querySelector(".addon-selected-helmet");
const selectedCheck2 = document.querySelector(".addon-selected-mount");
const selectedCheck3 = document.querySelector(".addon-selected-bag");

const selectedChecks = [selectedCheck1, selectedCheck2, selectedCheck3];

const addOnPrice1 = document.querySelector(".add-on-price1");
const addOnPrice2 = document.querySelector(".add-on-price2");
const addOnPrice3 = document.querySelector(".add-on-price3");

const addOnPrices = [addOnPrice1, addOnPrice2, addOnPrice3];

const Selected_addOnsWrapper = document.querySelector(
  ".addons-selected-wrapper",
);
const selected_addOn_helmet = document.querySelector(".addon-selected-helmet");
const selected_addOn_mount = document.querySelector(".addon-selected-imount");
const selected_addOn_bag = document.querySelector(".addon-selected-bag");

const selected_addOns = [
  selected_addOn_helmet,
  selected_addOn_mount,
  selected_addOn_bag,
];

const btn_parent_step2 = document.querySelector(".button-row-next");

const addOns_selected_wrapper = document.querySelector(
  ".accessoires-wrapper-2",
);

const addOns_toSend = document.querySelector(".selected-acc");

const bike_selected_name = document.getElementById("selected-bike");

const bike_selected_amount = document.getElementById("bike-amount");

const bike_unit_price = document.getElementById("unit-price");

const desk_bike_name = document.getElementById("desk-bike-name");

//----------------------------------------------------------------------//

nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    if (
      btn == nextBtn[0] ||
      btn == nextBtn[1] ||
      btn == nextBtn[2] ||
      btn == nextBtn[3]
    ) {
      fp.clear();
    } else {
      //console.log("not the button");
    }
  });
});

prevBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    //rentalTop.style.display = "block";
    updateFormSteps();

    // fp.clear();
  });
});

function updateFormSteps() {
  nextBtn.forEach((btn) => {
    btn.disabled = true;
  });
  formSteps.forEach((formStep) => {
    formStep.classList.contains("active") &&
      formStep.classList.remove("active");
  });
  formSteps[formStepsNum].classList.add("active");
}

for (let i = 0; i < bookBtns.length; i++) {
  bookBtns[i].addEventListener("click", function () {
    theValue = 0;
    checkedValue = 0;
    numtje = 0;
    BikeCounter = 1;
    bikeCountNum.innerText = BikeCounter;

    selectedDays.selectedIndex = "0";
    newHeading.innerText = bikeItemsData[i].name;
    newHeading2.innerText = bikeItemsData[i].name;
    bike_selected_name.value = bikeItemsData[i].name;
    //pay at desk--------------------------------------------
    desk_bike_name.value = bikeItemsData[i].name;
    //-------------------------------------------------------
    bike_unit_price.value = bikeItemsData[i].price2;
    bikePrice1.innerText = bikeItemsData[i].price1;
    bikePrice2.innerText = bikeItemsData[i].price2;
    stepTwoImg.src = bikeItemsData[i].step2img;
    stepThreeImg.src = bikeItemsData[i].step3img;
    selectedBikeNum = i;
    totalPrice.innerText = 0;
    totalPrice2.innerText = 0;
    priceCollected.value = 0;
    totalVal = 0;
    bigTotal = 0;
    checks.forEach((check) => {
      check.checked = false;
      check.disabled = true;
    });
    checksWrapper.style.opacity = "0.5";
    rentalTop.style.display = "none";
    btn_parent_step2.style.display = "none";
    selected_addOns.forEach((addOn) => {
      addOn.style.display = "none";
    });
  });
  console.log("bike price is " + bike_unit_price.value);
}

//----- prevent Next button------------------------
//console.log("The selected value is " , theValue);
//const preventNext = document.getElementById("step-1-nxt");

// const preventNext = btn_parent_step2.children[1];

// preventNext.addEventListener('click', function(){
//   console.log("step 1 next button clicked");

// })

//------------------------ nieuwe berekening -------------------------------------------------

//------------------ Adding bikes amount ------------------------

const bikeCountPlus = document.querySelector(".counter-plus");
const bikeCountMinus = document.querySelector(".counter-minus");
const bikeCountNum = document.querySelector(".count-num");

bikeCountPlus.addEventListener("click", () => {
  if (BikeCounter < 10) {
    BikeCounter++;
    BikeCounter = BikeCounter < 10 ? "0" + BikeCounter : BikeCounter;
    bikeCountNum.innerText = BikeCounter;
    //BikeAmountCollected.value = BikeCounter;
    bike_selected_amount.value = BikeCounter;

    console.log("bike amount is ", bike_selected_amount.value);

    step2Bikes.innerText = BikeCounter;
    //bigTotal *= BikeCounter;
    totalPrice.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    totalPrice2.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    priceCollected.value = updateBigTotal(bigTotal, totalVal, BikeCounter);

    //console.log("NUmber of bikes is ", BikeCounter);
  }
});

bikeCountMinus.addEventListener("click", () => {
  if (BikeCounter > 1) {
    BikeCounter--;
    BikeCounter = BikeCounter < 10 ? "0" + BikeCounter : BikeCounter;
    bikeCountNum.innerText = BikeCounter;
    //BikeAmountCollected.value = BikeCounter;
    bike_selected_amount.value = BikeCounter;

    step2Bikes.innerText = BikeCounter;
    totalPrice.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    totalPrice2.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    priceCollected.value = updateBigTotal(bigTotal, totalVal, BikeCounter);
  }
});

//------------------------ Calculation functions -------------------------------

function addingCalcs(calc1, calc2) {
  let total = calc1 + calc2;
  return total;
}

function updateBigTotal(cal1, cal2, cal3) {
  let SubTotal = addingCalcs(cal1, cal2);
  let MainTotal = SubTotal * cal3;
  return MainTotal;
}

//---------- addOns checks berekening -----------------------

let addOn_items = [];
let addOns_to_send = String;

checks.forEach((check) => {
  check.addEventListener("change", () => {
    val = parseInt(check.value);
    if (check.checked) {
      totalVal += val * theValue;
      console.log("totalVal is  ", totalVal);
      totalPrice.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
      totalPrice2.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
      priceCollected.value = updateBigTotal(bigTotal, totalVal, BikeCounter);

      addOns_selected_wrapper.style.display = "block";
      selected_addOns[checks.indexOf(check)].style.display = "block";
      //console.log(checks.indexOf(check));
      addOn_items.push(check.dataset.item);
      console.log(addOn_items);
      //addOns_to_send = addOn_items.toString;

      addOns_toSend.value = addOn_items;
    } else {
      totalVal -= val * theValue;
      console.log("totalVal is  ", totalVal);
      totalPrice.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
      totalPrice2.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
      priceCollected.value = updateBigTotal(bigTotal, totalVal, BikeCounter);

      addOns_selected_wrapper.style.display = "none";
      selected_addOns[checks.indexOf(check)].style.display = "none";

      addOn_items.pop(check.dataset.item);
      console.log(addOn_items);

      addOns_toSend.value = addOn_items;
    }
  });
});

//------------ Duration Calculation -----------------------

selectedDays.addEventListener("change", function () {
  checksWrapper.style.opacity = "1";
  btn_parent_step2.style.display = "block";
  checks.forEach((check) => {
    check.disabled = false;
  });

  theValue = parseInt(selectedDays.value);
  DurationCollected.value = theValue;
  if (theValue === 1) {
    step2duration.innerText = theValue + " day";
    //bigTotal = (theValue * bikeItemsData[selectedBikeNum].price1);
    bigTotal =
      theValue * bikeItemsData[selectedBikeNum].price2 +
      bikeItemsData[selectedBikeNum].dif;
    totalPrice.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    totalPrice2.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    priceCollected.value = updateBigTotal(bigTotal, totalVal, BikeCounter);

    /*
    console.log(" bigTotal eerste deel is ",theValue * bikeItemsData[selectedBikeNum].price2);
    console.log("difference is ", bikeItemsData[selectedBikeNum].dif);
    console.log("Berekening is nu ",bigTotal); 
    */
  } else {
    step2duration.innerText = theValue + " days";
    bigTotal =
      theValue * bikeItemsData[selectedBikeNum].price2 +
      bikeItemsData[selectedBikeNum].dif;
    totalPrice.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    totalPrice2.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    priceCollected.value = updateBigTotal(bigTotal, totalVal, BikeCounter);

    /*
    console.log(" bigTotal eerste deel is ",theValue * bikeItemsData[selectedBikeNum].price2);
    console.log("difference is ", bikeItemsData[selectedBikeNum].dif);
    console.log("Berekening is nu ",bigTotal); 
    */
  }
});

//--------------------------------------------------------------------------------------------

//---------------- FlatPickr---------------------------------------

const openingTimes = {
  Monday: { open: "14:00", close: "17:45" },
  Tuesday: { open: "10:00", close: "17:45" },
  Wednesday: { open: "10:00", close: "17:45" },
  Thursday: { open: "10:00", close: "17:45" },
  Friday: { open: "15:00", close: "17:45" },
  Saturday: { open: "10:00", close: "16:45" },
  Sunday: { open: "", close: "" },
};

function getAvailableTimes(day) {
  // Check if the day is a valid key in the openingTimes object
  if (!openingTimes[day]) {
    // If the day is not a valid key, return an empty array
    return [];
  }

  // If the day is a valid key, get the open and close times for that day
  const { open, close } = openingTimes[day];

  // Calculate the available times in 30 minute increments
  let startTime = new Date("1970-01-01 " + open);
  let endTime = new Date("1970-01-01 " + close);
  let availableTimes = [];
  while (startTime <= endTime) {
    availableTimes.push(startTime.toTimeString().substring(0, 5));
    startTime.setMinutes(startTime.getMinutes() + 30);
  }
  return availableTimes;
}

const fp = flatpickr("#input-date", {
  minDate: "today",
  altInput: true,
  altFormat: "M j, Y",
  dateFormat: "Y-m-d",
  disable: [
    function (date) {
      return date.getDay() === 0 || date.getDay() === 7;
    },
  ],
  "locale": {
    firstDayOfWeek: 1, // start week on Monday
  },

  onChange: function (selectedDates, dateStr, instance) {
    // Get the day of the week for the selected date
    let dayOfWeek = new Date(dateStr).toLocaleString("en-US", {
      weekday: "long",
    });

    // Get the available times for the selected day
    let availableTimes = getAvailableTimes(dayOfWeek);

    // Clear the current options in the #input-time dropdown
    let inputTime = document.querySelector("#input-time");
    inputTime.innerHTML = "Pick a time";

    // Add the available times as options in the #input-time dropdown
    availableTimes.forEach((time) => {
      let option = document.createElement("option");
      option.value = time;
      option.text = time;
      inputTime.add(option);
    });
    let newchosenDate = dateStr;
    let newfreshDate = newchosenDate.toString();
    newTime = newfreshDate.substring(16, 21);
    step2Time.innerText = inputTime.innerText;
    timeCollected.setAttribute("value", inputTime.innerText);
  },
});

/*
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="https://jasin1.github.io/bikeshopwest/bikes.js"></script>

https://jasin1.github.io/bikeshopwest/bikes.js

https://cdn.jsdelivr.net/gh/jasin1/bikeshopwest@6f584ffc5bb0815273c8e5a363de2b6fe2bff685/bikes.js

*/
