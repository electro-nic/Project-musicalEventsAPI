import { refs } from './refs'
import { onGreatGalleryEvents, totalIvents } from './renderGalleryCards'
import { onStartEventsLoad } from './pagination';
import apiService from '../services/api-services';
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
connectApi().then(data => {
    refs.eventList.innerHTML = cardTmp(data._embedded.events)

    // totalIvents(data),
    setPagination(data.page.totalElements);


    eventsArr.splice(0, 20);
    eventsArr.push(...data._embedded.events);
    document
      .querySelectorAll('.events__item')
      .forEach(event => event.addEventListener('click', openModal));
  })

// then(data => {
//     setPagination(data.page.totalElements);
//   });
// onStartEventsLoad();

}

function resetSelect() {
    const dropDown = document.getElementById("country");
    dropDown.selectedIndex = 0;
}