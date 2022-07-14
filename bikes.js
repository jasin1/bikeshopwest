console.log("We are in!!");

let openBtns = document.querySelectorAll(".bike-img-wrapper");
let modalContainer = document.getElementById("bike-modal-wrapper");
let modal = document.getElementById("modal-content");
let closeBtn = document.getElementById("modal-close-wrapper");

openBtns.forEach(btn =>{
  btn.addEventListener('click', function handleClick(event){
    modalContainer.style.display = 'block';
    console.log('bike clicked', event);
  });

});



closeBtn.addEventListener('click', function(){
 modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e){
  if(e.target === modalContainer){
    modalContainer.style.display = 'none';
    console.log('Modal clicked');
  }
});