const burger = document.getElementById('burgerMenu');
const nav = document.getElementById('nav')

burger.addEventListener('click',()=>{
    nav.classList.toggle('active')
})