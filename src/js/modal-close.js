import { modalRefs, refs } from './refs';
import { renderModalInfo } from './renderModalInfo';


modalRefs.closeModalBtn.addEventListener('click', closeModal);
modalRefs.closeModalWindow.addEventListener('click', closeModal);

// открытие модалки

export function openModal(e) {
  modalRefs.closeModalWindow.classList.remove('is-hidden');
  console.log('e.currentTarget', e.currentTarget);
  console.log('e.target', e.target);

  const index = e.currentTarget.dataset.index;

  window.addEventListener('keydown', keyEscape);

  renderModalInfo(index);
}

// закрытие модалки по кнопке и по оверлею

function closeModal(e) {
  if (e.currentTarget.nodeName === 'BUTTON') {
    e.preventDefault();
      setTimeout(function () {
      modalRefs.closeModalWindow.classList.add('is-hidden');
    }, 200)
  }
  if (e.target.nodeName === 'FORM') {
    e.preventDefault();
    setTimeout(function () {
      modalRefs.closeModalWindow.classList.add('is-hidden');
    }, 200)
  } if (e.target.nodeName === 'SPAN') {
    e.preventDefault();
    setTimeout(function () {
      modalRefs.closeModalWindow.classList.add('is-hidden');
    }, 200)
  }else {
    return;
  }
}

// закрытие модалки через ESC

function keyEscape(e) {
  if (e.code == 'Escape') {
    setTimeout(function () {
      modalRefs.closeModalWindow.classList.add('is-hidden');
    }, 200)
  }
}
