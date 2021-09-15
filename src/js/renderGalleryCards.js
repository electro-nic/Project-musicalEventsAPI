import { refs } from './refs';
import connectApi from './api-connect';
import cardTmp from '../templates/eventsGallery';


import { error, alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';



window.addEventListener('load', onGreatGalleryEvents())




function onGreatGalleryEvents() {
 
  try {
    connectApi().then(data => {
      // const events = data._embedded.events;
      // const nameList = new Set(events.map(item => item.name));
      // const newList = [...nameList].map(name => events.find(item => item.name === name))
      console.log(data._embedded.events);
      refs.eventList.insertAdjacentHTML('afterbegin', cardTmp(data._embedded.events));
    })
  } catch (error) {
    console.log(error.message);
  }
}