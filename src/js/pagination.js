import Pagination from 'tui-pagination';
import apiService from '../services/api-services';
import { refs } from './refs';
import cardTmp from '../templates/eventsGallery';
import debounce from 'lodash.debounce';
import { openModal } from '../js/modal-close';
import { eventsArr } from '../js/variables';
import { result } from 'lodash';

import newApi from "./api-connect"


document.addEventListener('DOMContentLoaded', onStartEventsLoad);

const nameInput = document.querySelector('#name-input');


function onStartEventsLoad() {
  apiService.resetPage();
  setEventsOnPage();

  apiService.fetchEvent().then(data => {
    // renderGallery(data);
    setPagination(data.page.totalElements);

  });
}

// function onInputSearch() {
//   apiService.keyword = nameInput.value;
//   refs.eventCardsRef.innerHTML = '';
//   apiService.resetPage();
//   setEventsOnPage();

//   apiService
//     .fetchEvent()
//     .then(data => {
//       renderGallery(data);
//       setPagination(data.page.totalPages).then(data => console.log(data));
//     })
//     .catch(console.log)
// }


export function setPagination(totalEvents) {
  const options = {
    totalItems: totalEvents > 5000 ? 5000 : totalEvents,
    itemsPerPage: apiService.size,
    visiblePages: window.outerWidth < 768 ? 3 : 5,
    page: 1,
    centerAlign: true,
  };

    if (totalEvents <= 20) {
    options.visiblePages = 1;
  }
      if (totalEvents <= 40) {
    options.visiblePages = 2;
  }
      if (totalEvents <= 60) {
    options.visiblePages = 3;
  }
      if (totalEvents <= 80) {
    options.visiblePages = 4;
  }

  const pagination = new Pagination('pagination', options);

  pagination.on('beforeMove', function (eventData) {
    apiService.page = eventData.page - 1;
    apiService.keyword = nameInput.value;

    setEventsOnPage();
    // apiService.fetchEvent().then(renderGallery).catch(console.log);

    newApi().then(data => {
      console.log("data ", data);
      console.log(apiService.page);
      console.log(nameInput.value);

      renderGallery(nameInput.value, apiService.page);
    });
      
  });
}

function PageToTop() {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
  });

}
function setEventsOnPage() {
  PageToTop();
  const windowOuterWidth = window.outerWidth;

  if (windowOuterWidth > 768 && windowOuterWidth < 1280) {
    apiService.size = 21;
  } else {
    apiService.size = 20;
  }
}

function renderGallery(inputText = '', newPage = 0) {

  console.log(newPage);
  console.log(inputText);

  newApi(inputText, newPage, 20, '').then(data => {

    

  const event = data._embedded.events.map(evt => ({
    ...evt,
    imgUrl: evt.images.find(img => img.width === 1024 && img.height === 683),
    locationRef: evt._embedded.venues,
  }));

     refs.eventList.innerHTML = cardTmp(event);
  document
    .querySelectorAll('.events__item')
    .forEach(event => event.addEventListener('click', openModal));


             //код Юли для открытия модалки
  eventsArr.splice(0, 20);

  eventsArr.push(...event);
  // console.log('eventsArr after push', eventsArr);

  document
    .querySelectorAll('.events__item')
    .forEach(event => event.addEventListener('click', openModal));


  });
}
export default setPagination;
//проверка пагинации
// const input = setPagination(70);
