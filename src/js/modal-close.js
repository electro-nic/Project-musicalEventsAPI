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

const closeModalWindow = document.querySelector('.modal__backdrop');
const closeModalBtn = document.querySelector('[data-action="close-modal__backdrop"]');

refs.eventList.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
closeModalWindow.addEventListener('click', closeModal);


function openModal(e) {
  if(e.target.nodeName === "LI") {
    e.preventDefault();
    closeModalWindow.classList.remove('class', 'is-hidden');
  }
  else {
    return;
  }
  window.addEventListener('keydown', keyEscape);

  console.log(e.target.nodeName);
};

function closeModal(e){
  if(e.target.nodeName !== "BUTTON") {
    return;
  }else{ 
    e.preventDefault()
    closeModalWindow.classList.add('class', 'is-hidden');
  };
  console.log(e.target.nodeName); 
  }
  



// function closeModal(){
//   closeModalWindow.classList.add('is-hidden');
// };

function keyEscape(e) {
  if(e.code === "Escape") {
    closeModal(e);
  }
}

