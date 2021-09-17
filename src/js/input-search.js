import apiService from './api-connect';
import { refs } from './refs';
import cardTmp from '../templates/eventsGallery'; 
import debounce from 'lodash.debounce';

import { error, alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const nameInput = document.querySelector('#name-input');
const searchIconRef = document.querySelector('.search__icon');
const clearSearchIconRef = document.querySelector('.clear-search__icon');
const eventCardsRef = document.querySelector('.events__list');

nameInput.addEventListener('input', debounce(onIconShow, 500));

function onIconShow(e) {
  e.preventDefault();
  if (!e.target.value.length) {
    searchIconRef.style.opacity = 1;
    clearSearchIconRef.style.opacity = 0;
  } else {
    clearSearchIconRef.style.opacity = 1;
    searchIconRef.style.opacity = 0;
  }
}


nameInput.addEventListener('input', debounce(handlerInput, 1000));

async function handlerInput(e){
  e.preventDefault();
  const keyword = nameInput.value;
   console.log(keyword)
   refs.eventList.innerHTML = '';
   const obj = apiService(keyword, 0, 20, '');
   obj.then(data => console.log(data))
  obj.then(data => {
    if (data.page.totalElements === 0 || keyword.length === 0) {
      return  error({
                text: 'Please. Enter the correct data to search for music events.',
                delay: 1000,
              });
    } else {
      onGreatGalleryEvents(data._embedded.events)
    }
  })
   .catch(err => console.log(err))};




// nameInput.addEventListener('input', debounce(handlerInput, 1000));

// async function handlerInput(e){
//   e.preventDefault();
//   const keyword = nameInput.value;
//    console.log(keyword)
//    refs.eventList.innerHTML = '';
//    const obj = apiService(keyword, 0, 20, '');
//    obj.then(data => console.log(data))
//    obj.then(data => onGreatGalleryEvents(data._embedded.events))
//    .catch(err => console.log(err))};




   function onGreatGalleryEvents(data) {
    //e.preventDefault();
    //const keyword = nameInput.value;
     //try {
      //apiService().then(data => {
         // const events = data._embedded.events;
         // const nameList = new Set(events.map(item => item.name));
         // const newList = [...nameList].map(name => events.find(item => item.name === name))
         //console.log(data._embedded.events);
         refs.eventList.insertAdjacentHTML('afterbegin', cardTmp(data));
      // })
     //} catch (error) {
       //console.log(error.message);
     //}
   }

//    function createEl({name, localDate}) {
//      const article = `
//      <li class="events__item">
//     <div class="event__general">
//         <div class="music__thumb">
//             <picture class="music__img">
//                 <source media='(min-width: 1280px)' srcset="{images.6.url}, {{images.1.url}}" />
//                 <source media='(min-width: 768px)' srcset='{{images.5.url}}, {{images.3.url}}' />
//                 <source media='(max-width: 767.9px)' srcset='{{images.8.url}}, {{images.7.url}}' />
//                 <img class="music__img-poster img" src="{{images.1.url}}" data-source="{{images.6.url}}" alt="{{name}}">
//             </picture>
//         </div>
//         <div class="music__info">
//             <h3 class="events__title title">${name}</h3>
//             <p class="events__text text">${localDate}</p>
//             <a href="#" class="music__link">
//                 <span class="material-icons">room</span>
//                 ${name}
//             </a>
//         </div>
//     </div>
// </li>
//      `
//      refs.eventList.insertAdjacentHTML('afterbegin', article);
//    }

// function renderEvents (data) {
//   data.forEach(el => {
//     refs.eventList.insertAdjacentHTML('afterbegin', cardTmp(data._embedded))
//     })
// }



// function renderEvents(data){
//   {
//     if (data._embedded.events.length === 0) {
//       console.log(error)
//       // return  error({
//       //   text: 'Incorrect data. Please enter your request again',
//       //   delay: 2000,
//       // });
//     } else console.log(data._embedded.events.map(el=> el.name)); }
   
//   // console.log(data._embedded.events.map(evt => ({
//   //   ...evt,
//   //   // imgUrl: evt.images.find(img => img.width === 1024 && img.height === 683),
//   //   // locationRef: evt._embedded.venues[0].name,
//   // })));

  //refs.eventList.insertAdjacentHTML('afterbegin', cardTmp(data._embedded.events));
        
      
