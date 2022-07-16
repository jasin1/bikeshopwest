console.log("We are in!!");

//----- variables----------------

let openBtn1 = document.querySelector(".bike-img-wrapper-1");
let openBtn2 = document.querySelector(".bike-img-wrapper-2");
let openBtn3 = document.querySelector(".bike-img-wrapper-3");
const bikeBtns = [openBtn1, openBtn2, openBtn3];
// console.log(bikeBtns);

let modalContainer = document.getElementById("bike-modal-wrapper");
let modal = document.getElementById("modal-content");
let closeBtn = document.getElementById("modal-close-wrapper");

//--------- Modal-----------------

for (const btn of bikeBtns){
  btn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
    document.body.style.overflow = 'hidden';
    console.log("bike clicked");
      
  })
}


closeBtn.addEventListener('click', function(){
 modalContainer.style.display = 'none';
 document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(e){
  //console.log("window clicked");
  if(e.target === modalContainer){
    console.log("modal clicked");
  }
});


//------------ Tabs---------------

const prevBtn = document.querySelectorAll(".button-prev");
const nextBtn = document.querySelectorAll(".button-next");
const formSteps = document.querySelectorAll(".tab");

let formStepsNum = 0;

nextBtn.forEach(btn =>{
  btn.addEventListener("click",()=>{
    formStepsNum++;
    updateFormSteps();
  });
});

function updateFormSteps(){
  formSteps.forEach((formStep) =>{
    formStep.classList.contains("active") && formStep.classList.remove("active");
    console.log("formStep update");
  });
  formSteps[formStepsNum].classList.add("active");
}