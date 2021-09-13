import { refs } from './refs';
import getEventsApi from './api-connect';
import cardTmp from '../templates/eventsGallery';


import { error, alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';


const state = {
    page: 1,
    value: '',
}

refs.form.addEventListener('submit', onSearchEvents);

async function onSearchEvents(e) {
  e.preventDefault();

  try {
    state.value = e.currentTarget.elements.query.value;

    const eventPictures = await getEventsApi(state.value, state.page);
    refs.eventList.innerHTML = cardTmp(eventPictures);
  } catch (error) {
    console.log(error.message);
  }
}



// async function onSearchEvents(e) {
//     e.preventDefault();
    
//   if(!e.currentTarget.elements.query.value.trim()) {

//       return error({
//           text: 'Введите коректные данные для поиска музыкальных событий. Например, "Eurovision"',
//           delay: 2000,
//       });  
//   }
  
//     try {
//       state.value = e.currentTarget.elements.query.value;
//       const events = await getEventsApi(state.value, state.page);
//       // refs.eventList.insertAdjacentHTML('beforeend', itemEvent(events));//как вставлять рaзметку через InnerHTML
//       refs.eventList.innerHTML = itemEvent(events); 
//       if (pictures.length > 19){
//           refs.input.value = '';
//               } 
  
//               else if(!pictures.length) {
//            alert({
//               text: 'Введите коректные данные для поиска музыкальных событий. Например, "Eurovision"',
//               delay: 2000
//           });  
//       }
  
//   } catch (error) {
//         console.log(error.message);
//     }
//   }