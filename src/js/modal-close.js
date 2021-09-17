import { modalRefs } from './refs';
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

// закрытие модалки по кнопке и по оверлнею

function closeModal(e) {
  if (e.currentTarget.nodeName === 'BUTTON') {
    e.preventDefault();
    modalRefs.closeModalWindow.classList.add('is-hidden');

    console.log(e.target.nodeName);
  }
  if (e.target.nodeName === 'FORM') {
    e.preventDefault();
    modalRefs.closeModalWindow.classList.add('is-hidden');

    console.log(e.target.nodeName);
  }  else {
    return;
  }

  console.log(e.target.nodeName);
}

// закрытие модалки через ESC

function keyEscape(e) {
  if (e.code == 'Escape') {
    modalRefs.closeModalWindow.classList.add('is-hidden');
  }
}
