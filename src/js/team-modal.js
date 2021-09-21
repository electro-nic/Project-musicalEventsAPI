import { refs } from './refs.js';

  
    refs.openTeamModalBtn.addEventListener('click', openTeamModal);
    refs.closeTeamModalBtn.addEventListener('click', closeTeamModal);
    refs.teamModal.addEventListener('click', closeBackdropClick);


  
    function openTeamModal() {
        window.addEventListener('keydown', onEscKeydown);
      refs.teamModal.classList.remove('hidden');

      refs.body.style.cssText += `height: 100%;
      with: 100%;
      overflow: hidden;`

    };

    function closeTeamModal() {
        window.removeEventListener('keydown', onEscKeydown);
        refs.teamModal.classList.add('hidden');

        refs.body.style.cssText -= `height: 100%;
        with: 100%;
        overflow: hidden;`
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