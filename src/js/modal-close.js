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

import { refs } from "./refs";

const closeModalWindow = document.querySelector('.modal__backdrop');
const closeModalBtn = document.querySelector('[data-action="close-modal__backdrop"]');
// const modalContainer = document.querySelector('.event__general');

refs.eventList.addEventListener('click', openModal);
// modalContainer.addEventListener('click',openModal);
closeModalBtn.addEventListener('click', closeModal);
closeModalWindow.addEventListener('click', closeModal);


function openModal(e) {
  if(e.target.nodeName !== "LI") {
    e.preventDefault();
    closeModalWindow.classList.remove('is-hidden');

    
  console.log(e.target.nodeName);
  }
  else {
    return;
  }

  window.addEventListener('keydown', keyEscape);

};

function closeModal(e){
  if(e.target.nodeName === "BUTTON") {
    e.preventDefault()
    closeModalWindow.classList.add('is-hidden');

    console.log(e.target.nodeName);

  } if(e.target.nodeName === "DIV"){
    e.preventDefault()
    closeModalWindow.classList.add('is-hidden');

    console.log(e.target.nodeName);
    
  } if(e.target.nodeName === "SPAN") {
     e.preventDefault()
    closeModalWindow.classList.add('is-hidden');

  }  
  else { 
       return;
  };
  

  console.log(e.target.nodeName);
  }
  
  
  function keyEscape(e) {
    if(e.code === "Escape") {
      closeModal(e);
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
