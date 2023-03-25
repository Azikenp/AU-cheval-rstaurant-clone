const menuBtn = document.querySelector('.menu-icon');
const para = document.querySelector('.info-wrapper');
const menu = document.querySelector('.menu-items');

menuBtn.addEventListener("click", function(){
    menu.classList.toggle('show-menu')
    para.classList.toggle('hide-para')
})
