console.log("We are in!!");

let openBtns = document.getElementsByClassName(".bike-img-wrapper");
let modalContainer = document.getElementById("bike-modal-wrapper");
let modal = document.getElementById("modal-content");
let closeBtn = document.getElementById("modal-close-wrapper");

for (let i = 0; i < openBtns.length; i++){

openBtns[i].addEventListener('click', function(){
  modalContainer.style.display = 'block';
});

}

closeBtn.addEventListener('click', function(){
 modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e){
  if(e.target === modalContainer){
    modalContainer.style.display = 'none';
  }
});