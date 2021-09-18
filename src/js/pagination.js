import Pagination from 'tui-pagination';
import apiService from '../services/api-services';
import { refs } from './refs';
import cardTmp from '../templates/eventsGallery';

import { openModal } from '../js/modal-close';
import { eventsArr } from '../js/variables';

function setPagination(totalEvents) {
  const options = {
    totalItems: totalEvents > 1000 ? 1000 : totalEvents,
    itemsPerPage: apiService.size,
    visiblePages: window.outerWidth < 768 ? 3 : 5,
    page: 1,
    centerAlign: true,
  };
  const pagination = new Pagination('pagination', options);

  pagination.on('beforeMove', function (eventData) {
    apiService.page = eventData.page - 1;
    setEventsOnPage();
    apiService.fetchEvent().then(renderGallery).catch(console.log);
  });
}

function setEventsOnPage() {
  const windowOuterWidth = window.outerWidth;

  if (windowOuterWidth > 768 && windowOuterWidth < 1280) {
    apiService.size = 21;
  } else {
    apiService.size = 20;
  }
}

function renderGallery(data) {
  const events = data._embedded.events.map(evt => ({
    ...evt,
    imgUrl: evt.images.find(img => img.width === 1024 && img.height === 683),
    locationRef: evt._embedded.venues[0].name,
  }));
  refs.eventList.innerHTML = cardTmp(events);
  document
    .querySelectorAll('.events__item')
    .forEach(event => event.addEventListener('click', openModal));

  eventsArr.splice(0, 20);

  eventsArr.push(...events);
  console.log('eventsArr after push', eventsArr);

  document
    .querySelectorAll('.events__item')
    .forEach(event => event.addEventListener('click', openModal));
}
export default setPagination;
//проверка пагинации
const input = setPagination(70);
