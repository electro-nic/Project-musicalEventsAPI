
    const refs = {
      openTeamModalBtn: document.querySelector('#js-open__btn'),
      closeTeamModalBtn: document.querySelector('#js-close__btn'),
      teamModal: document.querySelector('.team__backdrop'),

    };

  
    refs.openTeamModalBtn.addEventListener('click', openTeamModal);
    refs.closeTeamModalBtn.addEventListener('click', closeTeamModal);
    refs.teamModal.addEventListener('click', closeBackdropClick);


  
    function openTeamModal() {
        window.addEventListener('keydown', onEscKeydown);
      refs.teamModal.classList.remove('hidden');
    };

    function closeTeamModal() {
        window.removeEventListener('keydown', onEscKeydown);
        refs.teamModal.classList.add('hidden');
      };
    
      function closeBackdropClick(e) {
        if (e.currentTarget === e.target) {
            closeTeamModal();
        }
      }

      function onEscKeydown(event) {
        const ESC_KEY_CODE = "Escape";
        if (event.code === ESC_KEY_CODE) {
            closeTeamModal();
        }
      }