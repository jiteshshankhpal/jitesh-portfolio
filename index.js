const hamEl = document.querySelector('.ham-link');
const navSec = document.querySelector('.nav-section')
const mainSec= document.querySelector('.main-section')
const cancelBtn = document.querySelector('.x-icon')

hamEl.addEventListener('click', (e) => {
    e.preventDefault(); 
    navSec.classList.add('active');
    mainSec.classList.add('main-blur')
});

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navSec.classList.remove('active')
    mainSec.classList.remove('main-blur')
})

