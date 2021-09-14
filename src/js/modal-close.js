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

import { refs } from "./refs";

const closeModal = document.querySelector('.modal__backdrop');
const closeModalBtn = document.querySelector('.modal__close');
const backdrop = document.querySelector('.modal__backdrop');

refs.eventList.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeWindow);
closeModal.addEventListener('click', closeWindow);


function openModal(e) {
  e.preventDefault();
  if(e.target.nodeName === 'LI') {
    document.closeModal.classList.remove('is-hidden');
  }
  // else {
  //   return;
  // }
  // window.addEventListener('keydown', keyEscape);

  console.log(e.target.nodeName);
};

function closeWindow(){
   document.closeModal.classList.add('is-hidden');
   
      // console.log(e.target.nodeName);
    };

function keyEscape(e) {
  if(e.code === "Escape") {
    closeWindow();
  }
}

