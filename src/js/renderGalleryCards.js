import { refs } from './refs';
import connectApi from './api-connect';
import cardTmp from '../templates/eventsGallery';
import { openModal } from '../js/modal-close';
import { eventsArr } from '../js/variables';

import { error, alert, info } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

window.addEventListener('load', onGreatGalleryEvents());

function onGreatGalleryEvents() {
  try {
    connectApi().then(data => {
      totalIvents(data),
      // const events = data._embedded.events;
      // const nameList = new Set(events.map(item => item.name));
      // const newList = [...nameList].map(name => events.find(item => item.name === name))

      refs.eventList.insertAdjacentHTML(
        'afterbegin',
        cardTmp(data._embedded.events)
      );

      eventsArr.splice(0, 20);
      eventsArr.push(...data._embedded.events);
      document
        .querySelectorAll('.events__item')
        .forEach(event => event.addEventListener('click', openModal));
    });
  } catch (error) {
    console.log(error.message);
  }
}
 function totalIvents (data){
  info({
    text: `Found ${data.page.totalElements} musical events`,
    delay: 2000,
  });
 }