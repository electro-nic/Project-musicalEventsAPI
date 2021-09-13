(() => {
    const refs = {
    //   openModalLink: document.querySelector('.'),
      closeModalBtn: document.querySelector('.modal__close'),
      modal: document.querySelector('.modal__backdrop'),
    };
  
    // refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();