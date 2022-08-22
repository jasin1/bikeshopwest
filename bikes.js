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

const bookBtns = [bookBtn1, bookBtn2, bookBtn3];

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
const BikeAmountCollected = document.querySelector(".bike-amount-input");
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
    id:"bike01",
    name:"Handbrake Bike",
    price1:13,
    price2:9,
    dif:4,
    descShort:"Handbrake bike with 7 speed hub and hand-operated hand rakes",
    descLong:"Handbrake bike elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    step2img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62fe36981365fab92022f3a6_hand_break_proper.jpg",
    step3img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62fe36981365fab92022f3a6_hand_break_proper.jpg",
    //https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62fe36981365fab92022f3a6_hand_break_proper.jpg

    //https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62e92b671a593f0066953f63_big-footbrake.jpg
    //https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62c687a7edcb7f2c57d8af9b_hand-bike_optimized.jpg
  },
  {
    id:"bike02",
    name:"Electric Bike",
    price1:35,
    price2:30,
    dif:5,
    descShort:"Duis cursus, mi quis viverra ornare",
    descLong:"Electric bike adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    step2img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62fe3698752f7db84c5f6ed8_elec_proper.jpg",
    step3img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62fe3698752f7db84c5f6ed8_elec_proper.jpg",
  },
  {
    id:"bike03",
    name:"Cargo Bike",
    price1:25,
    price2:22,
    dif:3,
    descShort:"The cargo bike comes with 7 gears and is suitable for the maximum of 2 children",
    descLong:"Cargo Bike adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    step2img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62fe3698563383740e6d473e_cargo_proper.jpg",
    step3img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62fe3698563383740e6d473e_cargo_proper.jpg",
  },
  {
    id:"otherBikes",
    name:"Other bike",
    price1:0,
    price2:0,
    dif:0,
    descShort:"In addition we have special bicycles for rent such as parent- child tandems, regular tandems and more Bikes....",
    descLong:"We have bicycles in all shapes and sizes. We Rent City Bikes with backpedal brake and with handbrake and gears. In addition we have special bicycles for rent such as parent- child tandems, regular tandems and Cargo bikes. In order to make sure that the little ones can also take part, we also rent out bikes with child seats.",
    step2img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62d8f6ffc4ed336a8e95915b_handbrake-second.jpg",
    step3img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62d8dbb66a9b17027453895e_other-bikes-small.jpg",
  },
];

let formStepsNum = 0;
let selectedBikeNum = 0;


let modalContainer = document.getElementById("bike-modal-wrapper");
let modal = document.getElementById("modal-content");
let closeBtn = document.getElementById("modal-close-wrapper");

//--------- Modal-----------------


// for (let i =0; i < bikeBtns.length; i++){
    
//     bikeBtns[i].addEventListener('click', function(){
//     modalContainer.style.display = 'block';
//     document.body.style.overflow = 'hidden';
//     bikeHeading.innerHTML = bikeItemsData[i].name;
//     modalTxt.innerHTML = bikeItemsData[i].descLong;
//     modalImg.src = bikeItemsData[i].step2img;
//     //--------- steps Update--------
//     newHeading.innerText = bikeItemsData[i].name;
//     newHeading2.innerText = bikeItemsData[i].name;
//     bikePrice1.innerText = bikeItemsData[i].price1;
//     bikePrice2.innerText = bikeItemsData[i].price2;
//     stepTwoImg.src = bikeItemsData[i].step2img;
//     stepThreeImg.src = bikeItemsData[i].step3img;


//   })
// };

// modalBookBtn.addEventListener('click', function(){
//   modalContainer.style.display = 'none';
//   document.body.style.overflow = 'auto';
// });


// closeBtn.addEventListener('click', function(){
//  modalContainer.style.display = 'none';
//  document.body.style.overflow = 'auto';
// });

// window.addEventListener('click', function(e){
//   if(e.target === modalContainer){
//     //console.log("modal clicked");
//   }
// });


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

//const checksValues = [check1.value, check2.value, check3.value];
//console.log("the values van checks in array ", checksValues);

const selectedCheck1 = document.querySelector(".addon-selected-helmet");
const selectedCheck2 = document.querySelector(".addon-selected-mount");
const selectedCheck3 = document.querySelector(".addon-selected-bag");

const selectedChecks = [selectedCheck1, selectedCheck2, selectedCheck3];

const addOnPrice1 = document.querySelector(".add-on-price1");
const addOnPrice2 = document.querySelector(".add-on-price2");
const addOnPrice3 = document.querySelector(".add-on-price3");

const addOnPrices = [addOnPrice1, addOnPrice2, addOnPrice3];

const Selected_addOnsWrapper = document.querySelector(".addons-selected-wrapper");
const selected_addOn_helmet = document.querySelector(".addon-selected-helmet");
const selected_addOn_mount = document.querySelector(".addon-selected-imount");
const selected_addOn_bag = document.querySelector(".addon-selected-bag");

const selected_addOns = [selected_addOn_helmet, selected_addOn_mount, selected_addOn_bag];

const btn_parent_step2 = document.querySelector(".button-row-next");

const addOns_selected_wrapper = document.querySelector(".accessoires-wrapper-2");

const addOns_toSend = document.querySelector(".selected-acc");

const bike_selected_name = document.getElementById("selected-bike");

const bike_selected_amount = document.getElementById("bike-amount");


//console.log(btn_parent_step2.children[1]);

//console.log(selected_addOns);

//----------------------------------------------------------------------//


nextBtn.forEach(btn =>{
  btn.addEventListener("click",()=>{
    formStepsNum++;
    updateFormSteps();
    if(btn == nextBtn[0] ||btn == nextBtn[1] || btn == nextBtn[2] ){
      fp.clear();
    }else{
      //console.log("not the button");
    }
  });
});


prevBtn.forEach(btn =>{
  btn.addEventListener("click",()=>{
    formStepsNum--;
    //rentalTop.style.display = "block";
    updateFormSteps();

    // fp.clear();
  });
});


function updateFormSteps(){
  nextBtn.forEach(btn =>{
    btn.disabled = true;
  });
  formSteps.forEach((formStep) =>{
    formStep.classList.contains("active") && formStep.classList.remove("active");
  });
  formSteps[formStepsNum].classList.add("active");
}


for (let i =0; i < bookBtns.length; i++){
  bookBtns[i].addEventListener('click', function(){
    theValue = 0;
    checkedValue = 0;
    numtje = 0;
    BikeCounter = 1;
    bikeCountNum.innerText = BikeCounter; 

    selectedDays.selectedIndex = "0";
    newHeading.innerText = bikeItemsData[i].name;
    newHeading2.innerText = bikeItemsData[i].name;
    bike_selected_name.value = bikeItemsData[i].name;
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
    checks.forEach(check =>{
      check.checked = false;
      check.disabled = true;
    });
    checksWrapper.style.opacity = "0.5";
    rentalTop.style.display = "none";
    btn_parent_step2.style.display = "none"; 
    selected_addOns.forEach(addOn =>{
      addOn.style.display = "none";  
    });
  });
};


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



bikeCountPlus.addEventListener("click", ()=>{
  if(BikeCounter <10){  
    BikeCounter++;
    BikeCounter = (BikeCounter < 10) ? "0" + BikeCounter : BikeCounter;
    bikeCountNum.innerText = BikeCounter;
    BikeAmountCollected.value = BikeCounter;
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

bikeCountMinus.addEventListener("click", ()=>{
  if(BikeCounter >1){
    BikeCounter--;
    BikeCounter = (BikeCounter < 10) ? "0" + BikeCounter : BikeCounter;    
    bikeCountNum.innerText = BikeCounter; 
    BikeAmountCollected.value = BikeCounter;
    step2Bikes.innerText = BikeCounter;
    totalPrice.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    totalPrice2.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    priceCollected.value = updateBigTotal(bigTotal, totalVal, BikeCounter);   
  }
});


//------------------------ Calculation functions -------------------------------

function addingCalcs(calc1, calc2){
  let total = calc1 + calc2;
  return total;
}

function updateBigTotal(cal1, cal2, cal3){
  let SubTotal = addingCalcs(cal1,cal2);
  let MainTotal = SubTotal*cal3;
  return MainTotal;
}

//---------- addOns checks berekening -----------------------

let addOn_items = [];
let addOns_to_send = String;


checks.forEach(check =>{
  check.addEventListener("change",()=>{
    val = parseInt(check.value);
    if(check.checked){
      totalVal += (val*theValue);
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


    } else{
      totalVal -= (val*theValue);
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

  })

})

//------------ Duration Calculation -----------------------

selectedDays.addEventListener('change', function(){
  checksWrapper.style.opacity = "1";
  btn_parent_step2.style.display = "block"; 
  checks.forEach(check =>{
    check.disabled = false;
  });

  theValue = parseInt(selectedDays.value);
  DurationCollected.value = theValue;
  if(theValue === 1){
    step2duration.innerText = theValue + " day";
    bigTotal = (theValue * bikeItemsData[selectedBikeNum].price1);
    totalPrice.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    totalPrice2.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    priceCollected.value = updateBigTotal(bigTotal, totalVal, BikeCounter); 
  }else{
    step2duration.innerText = theValue + " days";
    bigTotal = (theValue * bikeItemsData[selectedBikeNum].price2) + bikeItemsData[selectedBikeNum].dif;
    totalPrice.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    totalPrice2.innerText = updateBigTotal(bigTotal, totalVal, BikeCounter);
    priceCollected.value = updateBigTotal(bigTotal, totalVal, BikeCounter);    
  }
 
});

//-------------------------------------------------------------------------------------------- 

//---------------- FlatPickr---------------------------------------


let newDatum = "";
let newTime = "";


config = {
  defaultDate:toDay,
  minDate:"today",
  // enableTime: false,
  // time_24h: true,
  // minTime:"10:30",
  // maxTime:"17:45",
  altInput: true,
  altFormat:"M j, Y",
  dateFormat: "Y-m-d",
  "disable":[
    function(date){
      return (date.getDay() ===0 || date.getDay() === 7);
    }
  ],
  "locale":{
    "firstDayOfWeek": 1
  },
  onChange: function(dateStr){
      let chosenDate = dateStr;
      let freshDate = chosenDate.toString();
      newDatum = freshDate.substring(0,15);
      //newTime = freshDate.substring(16,21);
      //console.log("time is ", newTime);
      //console.log(dateStr);
      stepTwoDate.innerText = newDatum;
      //step2Time.innerText = newTime;
      dateCollected.setAttribute('value', newDatum);
      // timeCollected.setAttribute('value', newTime);
      //console.log(dateCollected.value);
      //priceCollected
      //timeCollected     
  }
};

const fp = flatpickr(".input-date", config);



const tp = flatpickr(".input-time",{  
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24h: true,
  minTime:"10:30",
  maxTime:"17:45",
  disableMobile: "true",
  onChange: function(dateStr){
    let newchosenDate = dateStr;
    let newfreshDate = newchosenDate.toString();
    newTime = newfreshDate.substring(16,21);  
    step2Time.innerText = newTime;
    timeCollected.setAttribute('value', newTime);    
  }  
});




/*
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="https://jasin1.github.io/bikeshopwest/bikes.js"></script>

*/