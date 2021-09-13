(() => {
    const refs = {
    //   openModalLink: document.querySelector('.'),
      closeModalBtn: document.querySelector('.modal__close'),
      closeModalWindow: document.querySelector('.js-modal'),
      modal: document.querySelector('.modal__backdrop'),

    };
  
    // refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalWindow.addEventListener('keydown', keyEscape);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      // window.removeEventListener('keydown', keyEscape);
    }

  //   function closeModalWindow() {
  //     refs.createModalImg.classList.remove('is-open');
  //     refs.poster.src ="#";
  //     refs.poster.alt ="#";
  
  //     // window.removeEventListener('keydown', keyEscape);
  //  }
  })();