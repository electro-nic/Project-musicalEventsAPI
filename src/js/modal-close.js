// (() => {
//     const refs = {
//       openModalLink: document.querySelector('[data-modal-open]'),
//       closeModalBtn: document.querySelector('[data-modal-close]'),
//       modal: document.querySelector('[data-modal]'),
//     };

//     refs.openModalLink.addEventListener('click', toggleModal);
//     refs.closeModalBtn.addEventListener('click', toggleModal);

//     function toggleModal() {
//       refs.modal.classList.toggle('is-hidden');
//     }
//   })();

// открытие/закрытие модального окна

import { modalRefs, refs } from './refs';
import { renderModalInfo } from './renderModalInfo';

const closeModalWindow = document.querySelector('.modal__backdrop');
const closeModalBtn = document.querySelector(
  '[data-action="close-modal__backdrop"]'
);

// refs.eventListItem.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
closeModalWindow.addEventListener('click', closeModal);

export function openModal(e) {
  closeModalWindow.classList.remove('is-hidden');
  console.log('e.currentTarget', e.currentTarget);
  console.log('e.target', e.target);

  const index = e.currentTarget.dataset.index;
  window.addEventListener('keydown', keyEscape);

  renderModalInfo(index);
}

// function keyEnterClick(e) {
//   if (e.code === "Enter" && e.target.nodeName === "A") {
//     closeModalWindow.classList.remove('is-hidden');
// }
// window.addEventListener('keydown', keyEnterClick)
// }

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

function keyEscape(e) {
  if (e.code == 'Escape') {
    closeModal();
  }
}

// логика подгрузки изображение

// $.ajax({
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/events/k7vGFKzleBdwS/images.json?apikey=Ci1vLtAQ5toUQm0alN6gL6AfnGn8TpWy",
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 console.log(json);
//                 // Parse the response.
//                 // Do other things.
//              },
//     error: function(xhr, status, err) {
//                 // This time, we do not end up here!
//              }
//   });

// const imgCircle = document.querySelector('.modal__circle');

// imgCircle.insertAdjacentHTML
