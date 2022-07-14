console.log("We are in!!");

//const openButtons = document.querySelectorAll(".bike-img-wrapper");
let openBtn1 = document.querySelector(".bike-img-wrapper-1");
let openBtn2 = document.querySelector(".bike-img-wrapper-2");
let openBtn3 = document.querySelector(".bike-img-wrapper-3");

const bikeBtns = [openBtn1, openBtn2, openBtn3];
console.log(bikeBtns);

let modalContainer = document.getElementById("bike-modal-wrapper");
let modal = document.getElementById("modal-content");
let closeBtn = document.getElementById("modal-close-wrapper");

for (const btn of bikeBtns){
  btn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
    console.log("bike clicked");
      
  })
}


  // openBtn1.addEventListener('click', function(){
  //   modalContainer.style.display = 'block';
  //   console.log("bike 1 clicked");
  // });

  // openBtn2.addEventListener('click', function(){
  //   modalContainer.style.display = 'block';
  //   console.log("bike 2 clicked");
  // });

  // openBtn3.addEventListener('click', function(){
  //   modalContainer.style.display = 'block';
  //   console.log("bike 3 clicked");
  // });




closeBtn.addEventListener('click', function(){
 modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e){
  if(e.target === modalContainer){
    modalContainer.style.display = 'none';
    console.log("Modal clicked");
  }
});