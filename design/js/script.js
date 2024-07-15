// Activating strict mode
'use strict';

//////////////////////////
////// SELECTING ELEMENTS

const iconError = document.querySelector('.icon--error');
const messageError = document.querySelector('.message--error');
const emailCont = document.querySelector('.container__email');
const email = document.querySelector('#email');
const form = document.querySelector('form');
const submitBtn = document.querySelector('.btn');

//////////////////////////
////// IMPLEMENTING FUNCTIONALITY

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputValue = email.value;
  if (inputValue.includes('@') && inputValue.includes('.com')) {
    emailCont.style.borderColor = 'hsl(0, 36%, 70%)';
    emailCont.style.borderWidth = '1px';
    emailCont.style.transition = 'all 0.3s';
    iconError.classList.add('hidden');
    messageError.classList.add('hidden');
  } else {
    emailCont.style.borderColor = 'hsl(0, 93%, 68%)';
    emailCont.style.borderWidth = '2px';
    emailCont.style.transition = 'all 0.3s';
    iconError.classList.remove('hidden');
    messageError.classList.remove('hidden');
  }
});
