const burgerButton = document.getElementById("burgerButton");
const navBar = document.getElementById("navBar");

burgerButton.addEventListener('click',()=>{
    navBar.classList.toggle("active");
    navBar.classList.toggle("spaceB");
    navBar.classList.toggle("colMobile");
});