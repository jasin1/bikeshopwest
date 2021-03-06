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
const selectedDays = document.getElementById("form-select-input");
const dateCollected = document.querySelector(".date-colect-input");
const priceCollected = document.querySelector(".price-colect-input");
const step2duration = document.querySelector(".step-2-duration");

// let dayValue = selectedDays.options[select.selectedIndex].value;


let numBike = Number;

//-------------------------------

let bikeItemsData = [
  {
    id:"bike01",
    name:"Handbrake Bike",
    price1:13,
    price2:9,
    descShort:"Handbrake bike with 7 speed hub and hand-operated hand rakes",
    descLong:"Handbrake bike elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    step2img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62d64522e934bfc4c0661b99_handbrake-second.jpg",
    step3img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62c687a7edcb7f2c57d8af9b_hand-bike_optimized.jpg",
    features:["feat 01", "feat 02", "feat 03"],
  },
  {
    id:"bike02",
    name:"Electric Bike",
    price1:35,
    price2:30,
    descShort:"Duis cursus, mi quis viverra ornare",
    descLong:"Electric bike adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    step2img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62d6452269615ac0b9717c00_electric-second.jpg",
    step3img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62c68727357c53a029780361_e-bike_optimized.jpg",
    features:["feat 01", "feat 02", "feat 03", "feat 04"],
  },
  {
    id:"bike03",
    name:"Cargo Bike",
    price1:25,
    price2:22,
    descShort:"The cargo bike comes with 7 gears and is suitable for the maximum of 2 children",
    descLong:"Cargo Bike adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    step2img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62d6452295111531b12f75d4_cargo-second.jpg",
    step3img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62c687269e35636ce449e59d_cargo-bike_optimized.jpg",
    features:["feat 01", "feat 02", "feat 03", "feat 04"],
  },
  {
    id:"otherBikes",
    name:"Other bike",
    price1:0,
    price2:0,
    descShort:"In addition we have special bicycles for rent such as parent- child tandems, regular tandems and more Bikes....",
    descLong:"We have bicycles in all shapes and sizes. We Rent City Bikes with backpedal brake and with handbrake and gears. In addition we have special bicycles for rent such as parent- child tandems, regular tandems and Cargo bikes. In order to make sure that the little ones can also take part, we also rent out bikes with child seats.",
    step2img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62d8f6ffc4ed336a8e95915b_handbrake-second.jpg",
    step3img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62d8dbb66a9b17027453895e_other-bikes-small.jpg",
    features:["", "", "", ""]
  },
];

let formStepsNum = 0;
let selectedBikeNum = 0;


let modalContainer = document.getElementById("bike-modal-wrapper");
let modal = document.getElementById("modal-content");
let closeBtn = document.getElementById("modal-close-wrapper");

//--------- Modal-----------------


for (let i =0; i < bikeBtns.length; i++){
    
    bikeBtns[i].addEventListener('click', function(){
    modalContainer.style.display = 'block';
    document.body.style.overflow = 'hidden';
    bikeHeading.innerHTML = bikeItemsData[i].name;
    modalTxt.innerHTML = bikeItemsData[i].descLong;
    modalImg.src = bikeItemsData[i].step2img;
    //--------- steps Update--------
    newHeading.innerText = bikeItemsData[i].name;
    newHeading2.innerText = bikeItemsData[i].name;
    bikePrice1.innerText = bikeItemsData[i].price1;
    bikePrice2.innerText = bikeItemsData[i].price2;
    stepTwoImg.src = bikeItemsData[i].step2img;
    stepThreeImg.src = bikeItemsData[i].step3img;


  })
};

modalBookBtn.addEventListener('click', function(){
  modalContainer.style.display = 'none';
  document.body.style.overflow = 'auto';
});


closeBtn.addEventListener('click', function(){
 modalContainer.style.display = 'none';
 document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(e){
  if(e.target === modalContainer){
    //console.log("modal clicked");
  }
});


//------------ Tabs -------------------------------------

nextBtn.forEach(btn =>{
  // const a = nextBtn.indexOf(btn);
  btn.addEventListener("click",()=>{
    formStepsNum++;
    updateFormSteps();
    //formSteps.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  });
});

prevBtn.forEach(btn =>{
  btn.addEventListener("click",()=>{
    formStepsNum--;
    updateFormSteps();
  });
});


function updateFormSteps(){
  formSteps.forEach((formStep) =>{
    formStep.classList.contains("active") && formStep.classList.remove("active");
   // console.log("formStep update");
  });
  formSteps[formStepsNum].classList.add("active");
  // bikeHeading.innerHTML = bikeItemsData[formStepsNum].name;

}

// function updateFormContent(){
//   newHeading.innerText = bikeItemsData[formStepsNum].name;
//   console.log("the number is " + formStepsNum);
// }

for (let i =0; i < bookBtns.length; i++){
  bookBtns[i].addEventListener('click', function(){
    formSteps[selectedBikeNum].scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
    console.log(formSteps[i]);
    selectedDays.selectedIndex = "0";
    //console.log("bike selected");
    newHeading.innerText = bikeItemsData[i].name;
    newHeading2.innerText = bikeItemsData[i].name;
    bikePrice1.innerText = bikeItemsData[i].price1;
    bikePrice2.innerText = bikeItemsData[i].price2;
    stepTwoImg.src = bikeItemsData[i].step2img;
    stepThreeImg.src = bikeItemsData[i].step3img;
    selectedBikeNum = i;
    console.log(selectedBikeNum);
    totalPrice.innerText = 0;
    totalPrice2.innerText = 0;
    priceCollected.value = 0;
  });
};

let selectedDayValue;
let theValue = Number;
let bikeNum = Number;
//totalPrice
//totalPrice2
//priceCollected

//bikeItemsData[i].price1;

//selectedBikeNum

selectedDays.addEventListener('change', function(){
  theValue = parseInt(selectedDays.value);
  step2duration.innerText = theValue + " days";
  if(theValue === 1){
  //console.log("ONE day");
    totalPrice.innerText = theValue * bikeItemsData[selectedBikeNum].price1;
    totalPrice2.innerText = theValue * bikeItemsData[selectedBikeNum].price1;
    priceCollected.value = theValue * bikeItemsData[selectedBikeNum].price1;
  }else{
    //console.log("more days");  
    totalPrice.innerText = theValue * bikeItemsData[selectedBikeNum].price2;
    totalPrice2.innerText = theValue * bikeItemsData[selectedBikeNum].price2;
    priceCollected.value = theValue * bikeItemsData[selectedBikeNum].price2;      
  }
});




//---------------- FlatPickr---------------------------------------

// let chosenDate = "";
// let freshDate = "";
let newDatum = "";

config = {
  minDate:"today",
  enableTime: true,
  time_24h: true,
  minTime:"10:30",
  maxTime:"17:45",
  altInput: true,
  altFormat:"M j, Y at H:i",
  dateFormat: "Y-m-d H:i",
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
      newDatum = freshDate.substring(0,21);
      stepTwoDate.innerText = newDatum;
      dateCollected.setAttribute('value', freshDate);
      //console.log(dateCollected.value);     
  }
};

const fp = flatpickr(".input-date", config);

//Wed Jul 20 2022 12:00:00 GMT+0200 (Central European Summer Time)

// console.log(fp.formatDate(new Date(), "Y-m-d h:i K"));

// fp.config.onChange.push(function(dateStr){
//   console.log(dateStr);
// });