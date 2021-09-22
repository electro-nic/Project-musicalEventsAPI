import { refs } from './refs'
import { setPagination } from './pagination';
import connectApi from './api-connect';
import cardTmp from '../templates/eventsGallery';
import { eventsArr } from '../js/variables';
import { openModal } from '../js/modal-close';

refs.clearBtn.addEventListener('click', onClearBtn)

function onClearBtn(e) {
e.preventDefault()


refs.nameInput.value = '';
resetSelect()
refs.pagination.classList.remove('tui-pagination--none');
createEventsAfterClick()
}

export function createEventsAfterClick() {
    connectApi().then(data => {
        refs.eventList.innerHTML = cardTmp(data._embedded.events)
        setPagination(data.page.totalElements);
        eventsArr.splice(0, 20);
        eventsArr.push(...data._embedded.events);
        document
          .querySelectorAll('.events__item')
          .forEach(event => event.addEventListener('click', openModal));
      })
}

function resetSelect() {
    const dropDown = document.getElementById("country");
    dropDown.selectedIndex = 0;
}