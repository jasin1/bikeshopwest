console.log("We are in!!");

//----- variables----------------

let openBtn1 = document.querySelector(".bike-img-wrapper-1");
let openBtn2 = document.querySelector(".bike-img-wrapper-2");
let openBtn3 = document.querySelector(".bike-img-wrapper-3");
const bikeBtns = [openBtn1, openBtn2, openBtn3];
console.log(bikeBtns);

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

const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex(step =>{
  return step.classList.contains("active")
});

if(currentStep < 0){
  currentStep = 0;
  formSteps[currentStep].classList.add("active");
};

//console.log(currentStep);

multiStepForm.addEventListener("click", e => {
  if(e.target.matches("[data-next")){
    currentStep += 1;
  } else if(e.target.matches("[data-prev]")){
    currentStep -= 1;
  }
})