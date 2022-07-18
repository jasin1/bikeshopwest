console.log("We are in!!");

//----- Modal variables---------------------------

let openBtn1 = document.querySelector(".bike-img-wrapper-1");
let openBtn2 = document.querySelector(".bike-img-wrapper-2");
let openBtn3 = document.querySelector(".bike-img-wrapper-3");
const bikeBtns = [openBtn1, openBtn2, openBtn3];

const prevBtn = document.querySelectorAll(".button-prev");
const nextBtn = [...document.querySelectorAll(".button-next")];
const formSteps = document.querySelectorAll(".tab");

const modalTxt = document.querySelector(".modal-txt-wrapper");
const modalImg = document.querySelector(".modal-main-img");

// --------- Steps variables ----------------------

// let bookBtn1 = document.querySelector(".button-book-1");
// let bookBtn2 = document.querySelector(".button-book-2");
// let bookBtn3 = document.querySelector(".button-book-3");
// const bookBtns = [bookBtn1, bookBtn2, bookBtn3];

const bikeHeading = document.querySelector(".step-1-heading");
const bikeSelectedImg = document.querySelector(".selected-bike-img");
const bikePrice1 = document.querySelector(".step-1-price-1");
const bikePrice2 = document.querySelector(".step-1-price-2");
const totalPrice = document.querySelector(".total-price-calc");
const selectedDate = document.querySelector(".step-2-date");
const selectedDays = document.querySelector(".step-2-duration");

//-------------------------------

let bikeItemsData = [
  {id:"empty"},
  {
    id:"bike01",
    name:"Handbrake Bike",
    price1:12,
    price2:8,
    descShort:"Handbrake bike with 7 speed hub and hand-operated hand rakes",
    descLong:"Handbrake bike elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62c687a7edcb7f2c57d8af9b_hand-bike_optimized.jpg",
    features:["feat 01", "feat 02", "feat 03"],
  },
  {
    id:"bike02",
    name:"Electric Bike",
    price1:00,
    price2:00,
    descShort:"Duis cursus, mi quis viverra ornare",
    descLong:"Electric bike adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62c68727357c53a029780361_e-bike_optimized.jpg",
    features:["feat 01", "feat 02", "feat 03", "feat 04"],
  },
  {
    id:"bike03",
    name:"Cargo Bike",
    price1:25,
    price2:20,
    descShort:"The cargo bike comes with 7 gears and is suitable for the maximum of 2 children",
    descLong:"Cargo Bike adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    img:"https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62c687269e35636ce449e59d_cargo-bike_optimized.jpg",
    features:["feat 01", "feat 02", "feat 03", "feat 04"],
  },
];

let formStepsNum = 0;
let selectedBikeNum = 0;


let modalContainer = document.getElementById("bike-modal-wrapper");
let modal = document.getElementById("modal-content");
let closeBtn = document.getElementById("modal-close-wrapper");

//--------- Modal-----------------

// for (const btn of bikeBtns){
//   btn.addEventListener('click', function(){
//     modalContainer.style.display = 'block';
//     document.body.style.overflow = 'hidden';
//     // console.log("bike clicked");
//     // console.log("btn number", btn); 
//   })
// }

for (let i =0; i < bikeBtns.length; i++){
    bikeBtns[i].addEventListener('click', function(){
    modalContainer.style.display = 'block';
    document.body.style.overflow = 'hidden';
    bikeHeading.innerHTML = bikeItemsData[i].name;
    modalTxt.innerHTML = bikeItemsData[i].descLong;
    modalImg.src = 'https://uploads-ssl.webflow.com/62c46b823c4abf96a1029d64/62c687a7edcb7f2c57d8af9b_hand-bike_optimized.jpg';
    console.log(modalImg.src);
  })
};


closeBtn.addEventListener('click', function(){
 modalContainer.style.display = 'none';
 document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(e){
  if(e.target === modalContainer){
    console.log("modal clicked");
  }
});


//------------ Tabs -------------------------------------

nextBtn.forEach(btn =>{
  const a = nextBtn.indexOf(btn);
  btn.addEventListener("click",()=>{
    // a = nextBtn.indexOf(btn);
    bikeHeading.innerText = bikeItemsData[a].name;
    // bikeHeading.innerHTML = "test";
    // console.log(nextBtn.indexOf(btn));
    console.log(bikeHeading.innerText);
    console.log(bikeItemsData[a].name);
  
    formStepsNum++;
    updateFormSteps();
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