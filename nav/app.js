const menuicon = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
menuicon.addEventListener('click', ()=>{
    menuicon.classList.toggle('open');
    nav.classList.toggle('op');

})
