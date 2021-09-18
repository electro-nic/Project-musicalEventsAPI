import Pagination from 'tui-pagination';
import apiServices from '../services/api-services';
import onGreatGalleryEvents from './renderGalleryCards';
import debounce from 'lodash.debounce';
document.addEventListener('DOMContentLoaded', onStartEventsLoad);
import apiService from './api-connect';
import { refs } from './refs';
import cardTmp from '../templates/eventsGallery'; 
import { error, alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const nameInput = document.querySelector('#name-input');
const searchIconRef = document.querySelector('.search__icon');
const clearSearchIconRef = document.querySelector('.clear-search__icon');
const eventCardsRef = document.querySelector('.events__list');
const clearInput = document.querySelector('#search-link');

// nameInput.addEventListener('input', debounce(onIconShow, 500));
nameInput.addEventListener('input', debounce(handlerInputPage, 1000));

// clearInput.addEventListener('click', onInputClear);
function onStartEventsLoad() {
  apiServices.resetPage();
  setEventsOnPage();

  apiServices.fetchEvent().then(data => {
    // onGreatGalleryEvents(data);
    setPagination(data.page.totalElements);
  });
}

async function handlerInputPage(e){
  e.preventDefault();
  const keyword = nameInput.value;
   console.log(keyword)
   const obj = apiService(keyword, 0, 20, '');
  //  obj.then(data => console.log(data))
  obj.then(data => {
    if (data.page.totalElements === 0 || keyword.length === 0) {
      return  onError()
    } else {
      obj.then(data => {
        setPagination(data.page.totalElements);
        obj.then(data => console.log(data));
      });
    }
  })
   .catch(err => console.log(err))}; 

function setPagination(totalEvents) {
  const options = {
    totalItems: totalEvents > 1000 ? 1000 : totalEvents,
    itemsPerPage: apiServices.size,
    visiblePages: window.outerWidth < 768 ? 3 : 5,
    page: 1,
    centerAlign: true,
  };
  const pagination = new Pagination('pagination', options);

  pagination.on('beforeMove', function (eventData) {
    apiServices.page = eventData.page - 1;
    setEventsOnPage();
    apiServices.fetchEvent().then(onGreatGalleryEvents).catch(console.log);
  });
}

function setEventsOnPage() {
  const windowOuterWidth = window.outerWidth;
 
  if (windowOuterWidth > 768 && windowOuterWidth < 1280) {
    apiServices.size = 21;
  } else {
    apiServices.size = 20;
  }
}


// function renderGallery(data) {
//   const events = data._embedded.events.map(evt => ({
//     ...evt,
//     imgUrl: evt.images.find(img => img.width === 1024 && img.height === 683),
//     locationRef: evt._embedded.venues[0].name,
//   }));
//   //refs.eventCardsRef.innerHTML = eventsListTpl(events);
// }
export default setPagination;
//проверка пагинации
// const input = setPagination(70);