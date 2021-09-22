import { modalRefs, refs } from './refs';
import { renderModalInfo } from './renderModalInfo';


modalRefs.closeModalBtn.addEventListener('click', closeModal);
modalRefs.closeModalWindow.addEventListener('click', closeModal);

// открытие модалки

export function openModal(e) {
  modalRefs.closeModalWindow.classList.add('is-show');
  modalRefs.closeModalWindow.classList.remove('is-hidden');
 
  modalRefs.modal.style.transform = `translateX(-50%) translateY(-50%)`;

  refs.body.style.cssText += `height: 100%;
    with: 100%;
    overflow: hidden;`
  
  const index = e.currentTarget.dataset.index;

  window.addEventListener('keydown', keyEscape);

  renderModalInfo(index);
}

// закрытие модалки по кнопке и по оверлею

function closeModal(e) {
 
  if (e.currentTarget.nodeName === 'BUTTON') {
    e.preventDefault();

    modalRefs.modal.style.transform = `translateX(50%) translateY(50%)`;
    modalRefs.modal.style.transition += `transform 1000`;
      setTimeout(function () {
      modalRefs.closeModalWindow.classList.add('is-hidden');
      modalRefs.closeModalWindow.classList.remove('is-show');

      refs.body.style.cssText -= `height: 100%;
    with: 100%;
    overflow: hidden;`
      
    }, 200)
  }
  if (e.target.nodeName === 'FORM') {
    e.preventDefault();

    modalRefs.modal.style.transform = `translateX(50%) translateY(50%)`;
    modalRefs.modal.style.transition += `transform 1000`;
   setTimeout(function () {
      modalRefs.closeModalWindow.classList.add('is-hidden');
      modalRefs.closeModalWindow.classList.remove('is-show');

      refs.body.style.cssText -= `height: 100%;
    with: 100%;
    overflow: hidden;`

    }, 200)
  } if (e.target.nodeName === 'SPAN') {
    e.preventDefault();

    modalRefs.modal.style.transform = `translateX(50%) translateY(50%)`;
    modalRefs.modal.style.transition += `transform 1000`;
    setTimeout(function () {
      modalRefs.closeModalWindow.classList.add('is-hidden');
      modalRefs.closeModalWindow.classList.remove('is-show');

      refs.body.style.cssText -= `height: 100%;
    with: 100%;
    overflow: hidden;`

    }, 200)
  }else {
    return;
  }
}

// закрытие модалки через ESC

function keyEscape(e) {
  if (e.code == 'Escape') {

    modalRefs.modal.style.transform = `translateX(50%) translateY(50%)`;
    modalRefs.modal.style.transition += `transform 1000`;
    
    setTimeout(function () {
      modalRefs.closeModalWindow.classList.add('is-hidden');
      modalRefs.closeModalWindow.classList.remove('is-show');

      refs.body.style.cssText -= `height: 100%;
    with: 100%;
    overflow: hidden;`
    
    }, 200)
  }
}


modalRefs.modal.addEventListener('click', animationClose);

function animationClose(e) {
  e.preventDefault();

  if(closeModal) {

 
modalRefs.modal.style.transform = `translateX(50%) translateY(50%)`;

modalRefs.modal.style.transition += `transform 1000`;
  } 
  
}