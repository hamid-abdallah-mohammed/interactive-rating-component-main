const stateRate = document.querySelector('.rate');
const thanksMessage = document.querySelector('.thanks');
const btns = document.querySelectorAll('.btn');
const submitRate = document.querySelector('.submit');
const rateNumber = document.querySelector('.rate__number');


submitRate.addEventListener('click', () => {
    // change the state rate first
    stateRate.style.opacity = '-2';
     thanksMessage.style.zIndex = '2';
     thanksMessage.style.opacity = '10';
});

// take clicked values
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        rateNumber.innerHTML = " " + e.target.innerText + " "
    })
})
