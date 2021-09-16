
// import { refs } from './refs';
// import { renderModalInfo } from './renderModalInfo';

// const closeModalWindow = document.querySelector('.modal__backdrop');
// const closeModalBtn = document.querySelector(
//   '[data-action="close-modal__backdrop"]'
// );

// closeModalBtn.addEventListener('click', closeModal);
// closeModalWindow.addEventListener('click', closeModal);

// export function openModal(e) {
//   closeModalWindow.classList.remove('is-hidden');
//   console.log('e.currentTarget', e.currentTarget);
//   console.log('e.target', e.target);

//   const index = e.currentTarget.dataset.index;
//   window.addEventListener('keydown', keyEscape);

//   renderModalInfo(index);
// }

// function closeModal(e) {
//   if (e.target.nodeName === 'BUTTON') {
//     e.preventDefault();
//     closeModalWindow.classList.add('is-hidden');

//     console.log(e.target.nodeName);
//   }
//   if (e.target.nodeName === 'FORM') {
//     e.preventDefault();
//     closeModalWindow.classList.add('is-hidden');

//     console.log(e.target.nodeName);
//   }
//   if (e.target.nodeName === 'SPAN') {
//     e.preventDefault();
//     closeModalWindow.classList.add('is-hidden');
//   } else {
//     return;
//   }

//   console.log(e.target.nodeName);
// }

// function keyEscape(e) {
//   if (e.code == 'Escape') {
//     closeModalWindow.classList.add('is-hidden');
//   }
// }

import { refs } from './refs';
import { renderModalInfo } from './renderModalInfo';

const closeModalWindow = document.querySelector('.modal__backdrop');
const closeModalBtn = document.querySelector(
  '[data-action="close-modal__backdrop"]'
);

closeModalBtn.addEventListener('click', closeModal);
closeModalWindow.addEventListener('click', closeModal);

export function openModal(e) {
  closeModalWindow.classList.remove('is-hidden');
  console.log('e.currentTarget', e.currentTarget);
  console.log('e.target', e.target);

  const index = e.currentTarget.dataset.index;
  window.addEventListener('keydown', onCloseModalESC);

  renderModalInfo(index);
}

function closeModal(e) {
  if (e.target.nodeName === 'BUTTON') {
    e.preventDefault();
    closeModalWindow.classList.add('is-hidden');

    console.log(e.target.nodeName);
  }
  if (e.target.nodeName === 'FORM') {
    e.preventDefault();
    closeModalWindow.classList.add('is-hidden');

    console.log(e.target.nodeName);
  }
  if (e.target.nodeName === 'SPAN') {
    e.preventDefault();
    closeModalWindow.classList.add('is-hidden');
  } else {
    return;
  }

  console.log(e.target.nodeName);
}

function onCloseModalESC(e) {
  if (e.key !== 'Escape') {
    return;
  }
  console.log('закрываю модалку по', e.key);
  closeModalWindow.classList.add('is-hidden');
}

