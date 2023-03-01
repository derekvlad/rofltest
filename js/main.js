const btnLink = document.querySelectorAll(".menu-item__btn");
const modal = document.querySelector('.menu-modal');
const modalText = document.querySelector('.menu-modal__text');
const btnYes = document.querySelector('.menu-modal__btn--yes');
const btnNo = document.querySelector('.menu-modal__btn--no');

btnLink.forEach(item => {
   item.addEventListener("click", function(){
      modal.classList.add('active')
   })
});
function randomArr() {
   const textObf = [ 'Уверен? ','Не пизди','Ой всё','Ой бляя','Ну да Ну да' ]
   let random = Math.floor(Math.random()*textObf.length)
   return textObf[random]
}

btnYes.addEventListener('click', function(){
   modalText.textContent = randomArr()
   
})
const widthDesktop = window.innerWidth-500
const heightDesktop = window.innerHeight

console.log(widthDesktop)
console.log(heightDesktop)
function widthPosition (){
  const minWidth = Math.ceil(0);
  const maxWidth = Math.floor(widthDesktop);
  return Math.floor(Math.random() * (maxWidth - minWidth) + minWidth );
}
function heightPosition (){
   const minHight = Math.ceil(0);
   const maxHight = Math.floor(heightDesktop);
   return Math.floor(Math.random() * (maxHight - minHight) + minHight );
}

btnNo.addEventListener('click',function(){
   modal.style.top = heightPosition() + "px";
   modal.style.left = widthPosition() + "px";
})

