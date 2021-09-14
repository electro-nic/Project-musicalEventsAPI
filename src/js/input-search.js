import { refs } from './refs';
import searchEvent from '../templates/inputOnSearchTmp';
import getEventsApi from './api-connect';

const API_KEY = 'Ci1vLtAQ5toUQm0alN6gL6AfnGn8TpWy';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';

const form = document.querySelector("#search-form");
let gallery = document.querySelector('.event-list');

form.addEventListener("submit", onSearch);


 async function onSearch (e) {
    e.preventDefault();
    try {
    
    getEventsApi().then(data => {
     gallery.insertAdjacentHTML('beforeend', searchEvent(data._embedded.events));
    })
  } catch (error) {
    console.log(error.message);
  }
}



