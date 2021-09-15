import  connectApi from './api-connect';
import { refs } from './refs';
import { error, alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

var debounce = require('lodash.debounce');

const nameInput = document.querySelector('#name-input');
const searchIconRef = document.querySelector('.search__icon');
const clearSearchIconRef = document.querySelector('.clear-search__icon');
const eventCardsRef = document.querySelector('.events__list');

nameInput.addEventListener('input', debounce(onIconShow, 500));
nameInput.addEventListener('input', debounce(onSearchEvents, 1000));

// function onGreatGalleryEvents() {
 
//   try {
//     connectApi().then(data => {
//       // const events = data._embedded.events;
//       // const nameList = new Set(events.map(item => item.name));
//       // const newList = [...nameList].map(name => events.find(item => item.name === name))
//       console.log(data._embedded.events);
//       refs.eventList.insertAdjacentHTML('afterbegin', cardTmp(data._embedded.events));
//     })
//   } catch (error) {
//     console.log(error.message);
//   }
// }


 async function onSearchEvents(e) {
   
     const searchQuery = nameInput.value.trim();
     console.log(searchQuery);
     

     const fetchEvents = await connectApi(searchQuery).then(data => console.log(data._embedded.events));
     
    
    // if (!searchQuery) {
    //     return error({
    //         text: 'Введите данные',
    //     })
    // }
}


function onIconShow(e) {
    
  if (!e.target.value.length) {
    searchIconRef.style.opacity = 1;
    clearSearchIconRef.style.opacity = 0;
  } else {
    clearSearchIconRef.style.opacity = 1;
    searchIconRef.style.opacity = 0;
  }

}

