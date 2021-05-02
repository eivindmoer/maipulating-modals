'use strict';

// creating variables for querySelector to avoid unreadable code and keep the code DRY
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// open modal button
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// close modal button
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// show modal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// hide modal with click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// hide modal with Escape-button
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
