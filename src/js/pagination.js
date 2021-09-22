import Pagination from 'tui-pagination';
import apiService from '../services/api-services';
import { refs } from './refs';
import cardTmp from '../templates/eventsGallery';
import { openModal } from '../js/modal-close';
import { eventsArr } from '../js/variables';
import newApi from "./api-connect"

document.addEventListener('DOMContentLoaded', onStartEventsLoad);

function onStartEventsLoad() {
  apiService.resetPage();
  setEventsOnPage();

  apiService.fetchEvent().then(data => {
    setPagination(data.page.totalElements);

  });
}

export function setPagination(totalEvents) {
  const options = {
    // totalItems: totalEvents,
    totalItems:    totalEvents > 500 ? 500 : totalEvents    ,

    itemsPerPage: apiService.size,
    visiblePages: window.outerWidth < 768 ? 3 : 5,
    page: 1,
    centerAlign: true,
  };

  //   if (totalEvents <= 20) {
  //   options.visiblePages = 1;
  // }
  //     if (totalEvents <= 40) {
  //   options.visiblePages = 2;
  // }
  //     if (totalEvents <= 60) {
  //   options.visiblePages = 3;
  // }
  //     if (totalEvents <= 80) {
  //   options.visiblePages = 4;
  // }

  const pagination = new Pagination('pagination', options);

  pagination.on('beforeMove', function (eventData) {
 
    apiService.page = eventData.page - 1;
    apiService.keyword = refs.nameInput.value.trim();

    console.log('eventData.page', eventData.page);
    console.log('apiService.page', apiService.page);

    setEventsOnPage();
    newApi().then(data => {
      console.log(data);
      renderGallery(apiService.keyword, eventData.page);
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
  // const windowOuterWidth = window.outerWidth;

  // if (windowOuterWidth > 768 && windowOuterWidth < 1280) {
  //   apiService.size = 21;
  // } else {
  //   apiService.size = 20;
  // }
}

function renderGallery(inputText = '', newPage = 0) {
  console.log(newPage);
  console.log(inputText);
newApi(inputText, newPage, 20, '').then(data => {
  console.log(data);


  const event = data._embedded.events.map(evt => ({
    ...evt,
    imgUrl: evt.images.find(img => img.width === 1024 && img.height === 683),
    locationRef: evt._embedded.venues,
  }));

     refs.eventList.innerHTML = cardTmp(event);

             //код Юли для открытия модалки
  eventsArr.splice(0, 20);
  eventsArr.push(...event);
  document
    .querySelectorAll('.events__item')
    .forEach(event => event.addEventListener('click', openModal));



  
  //   const event = data._embedded.events.map(evt => ({
  //   ...evt,
  //   imgUrl: evt.images.find(img => img.width === 1024 && img.height === 683),
  //   locationRef: evt._embedded.venues,
  // })
  // )
  // console.log(event);
  // ;

  });
}
export default setPagination;