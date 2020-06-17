//using const b/c variables wont change value
const hamburgerIcon = document.querySelector(".hamburger--container")
const navBar = document.querySelector(".navbar")


//higher order callback function 
hamburgerIcon.addEventListener('click', () =>{
    navBar.classList.toggle("change")
});