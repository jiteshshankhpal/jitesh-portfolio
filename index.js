const hamEl = document.querySelector('.ham-link');
const navSec = document.querySelector('.nav-section')

hamEl.addEventListener('click', (e) => {
    e.preventDefault(); 
    navSec.classList.add('active');
});