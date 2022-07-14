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

// window.addEventListener('click', function(e){
//   console.log("window clicked");
//   if(e.target === modalContainer){
//     modalContainer.style.display = 'none';
//     console.log("Modal clicked");
//   }
// });


//------------ Tabs---------------

let bookBtn1 = document.querySelector(".button-book-1");
let bookBtn2 = document.querySelector(".button-book-2");
let bookBtn3 = document.querySelector(".button-book-3");
const bookBtns = [bookBtn1, bookBtn2, bookBtn3];
let currentTab = 0;
showTab(currentTab);

function showTab(n){
 let x = document.getElementsByClassName("tab");
 x[n].style.display = "block";
}

for (const bookBtn of bookBtns){
  bookBtn.addEventListener('click', function(){
  currentTab = 1;
  console.log("bookBtn clicked");     
  })
}