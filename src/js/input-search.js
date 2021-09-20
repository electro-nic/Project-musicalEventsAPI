import apiService from './api-connect';
import { refs } from './refs';
import cardTmp from '../templates/eventsGallery'; 
import debounce from 'lodash.debounce';
import { openModal } from '../js/modal-close';
import { eventsArr } from '../js/variables';

import { error, alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const nameInput = document.querySelector('#name-input');
const searchIconRef = document.querySelector('.search__icon');
const clearSearchIconRef = document.querySelector('.clear-search__icon');
const eventCardsRef = document.querySelector('.events__list');
const clearInput = document.querySelector('#search-link');

//nameInput.addEventListener('input', debounce(onIconShow, 500));
// nameInput.addEventListener('input', debounce(handlerInput, 1000));
// nameInput.addEventListener('focus', handlerInput);

//clearInput.addEventListener('click', onInputClear);
refs.form.addEventListener('submit', handlerInput)


// function onInputClear(e) {
//   e.preventDefault();
  
//   if (e.currentTarget.nodeName === 'A') {
//     nameInput.value = '';
//     clearSearchIconRef.style.opacity = 0;
//     searchIconRef.style.opacity = 1;
//   } else return
// }

// function onIconShow(e) {
  
//   if (!e.target.value.length) {
//     searchIconRef.style.opacity = 1;
//     clearSearchIconRef.style.opacity = 0;
//   } else {
//     clearSearchIconRef.style.opacity = 1;
//     searchIconRef.style.opacity = 0;
//   }
// }

function handlerInput(e){
  e.preventDefault();
  const keyword = nameInput.value;
  // const countryCode = refs.inputCountry.value;
   console.log(keyword)
  //  console.log(countryCode)
   refs.eventList.innerHTML = '';
  //  if (refs.disabledSelect.textContent === 'Choose country'){
  //   // obj = apiService(keyword, 0, 20, '');
  //   countryCode === '';
  //   console.log('країну не вибрано')
  // }
   const obj = apiService(keyword, 0, 20, );
   obj.then(data => console.log(data))
  obj.then(data => {
    const totalElements = data.page.totalElements
    console.log(totalElements)
    if (totalElements === 0 || keyword.length === 1)  {
      return  onError()
    } 
    else {
      creatGalleryCards(data._embedded.events);
    }
  })
   .catch(err => console.log(err))};

function onError(){
  error({
    text: 'Please. Enter the correct data to search for music events.',
    delay: 2000,
  });
}

  export function creatGalleryCards(data) {
         refs.eventList.insertAdjacentHTML('afterbegin', cardTmp(data));

         //код Юли для открытия модалки
        console.log('data', data);
         eventsArr.splice(0, 20);
         eventsArr.push(...data);
      document
        .querySelectorAll('.events__item')
        .forEach(event => event.addEventListener('click', openModal));

   }

   