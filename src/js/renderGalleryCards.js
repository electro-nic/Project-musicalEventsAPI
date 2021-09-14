import { refs } from './refs';
import getEventsApi from './api-connect';
import cardTmp from '../templates/eventsGallery';


import { error, alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';



// refs.form.addEventListener('submit', onGreatGalleryEvents);


onGreatGalleryEvents()
async function onGreatGalleryEvents() {

  // e.preventDefault();

  try {
    // state.value = e.currentTarget.elements[0].value;
    getEventsApi().then(data => {
      console.log(data._embedded.events);
      refs.eventList.insertAdjacentHTML('afterbegin', cardTmp(data._embedded.events));
    })
  } catch (error) {
    console.log(error.message);
  }
}