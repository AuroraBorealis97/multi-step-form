const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const step4 = document.getElementById('step-4');
const step5 = document.getElementById('step-5');
const nextBtn1 = document.getElementById('next-1');
const nextBtn2 = document.getElementById('next-2');
const nextBtn3 = document.getElementById('next-3');
const nextBtn4 = document.getElementById('next-4');


nextBtn1.addEventListener('click', (event) => {
    event.preventDefault();
    step1.classList.add('d-none');
    step2.classList.remove('d-none');
   
})
nextBtn2.addEventListener('click', (event) => {
    event.preventDefault();
    step3.classList.remove('d-none');
    step2.classList.add('d-none');
   
})
nextBtn3.addEventListener('click', (event) => {
    event.preventDefault();
    step4.classList.remove('d-none');
    step3.classList.add('d-none');
   
})
nextBtn4.addEventListener('click', (event) => {
    event.preventDefault();
    step5.classList.remove('d-none');
    step4.classList.add('d-none');
   
})