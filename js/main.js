var elOpen = document.querySelector(".js-open-modal");
var elModal = document.querySelector(".modal");
var  elClose = document.querySelector(".js-close-modal");

elOpen.addEventListener("click", function(){
elModal.classList.add("modal-open");

});

elClose.addEventListener("click", function(){
elModal.classList.remove("modal-open")
});