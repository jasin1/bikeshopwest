console.log("We are in!!");

let openBtn = document.getElementById("bike-img-wrapper");
let modalContainer = document.getElementById("bike-modal-wrapper");
let modal = document.getElementById("modal-content");
let closeBtn = document.getElementById("modal-close-wrapper");

openBtn.addEventListener('click', function(){
  modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
 modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e){
  if(e.target === modalContainer){
    modalContainer.style.display = 'none';
  }
});