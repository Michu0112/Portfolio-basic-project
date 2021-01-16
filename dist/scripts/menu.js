//side button animation
const navBar = document.querySelector('.nav-bar');
const btn = document.getElementById('nav-btn');
btn.addEventListener('click', () =>{
    btn.classList.toggle('hamburger--active');
    navBar.classList.toggle('showMenu');
    document.body.classList.toggle('overflowHidden');
});

