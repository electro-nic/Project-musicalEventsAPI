import { modalRefs, refs } from './refs';
import { eventsArr } from './variables';
import apiService from './api-connect';
import cardTmp from '../templates/eventsGallery';
import { openModal } from '../js/modal-close';

export function renderModalInfo(index) {
  const currentEvent = eventsArr[index];
  console.log('data:', currentEvent);
  console.log('NAME', currentEvent.name)
  

   const eventTime = currentEvent?.dates?.start?.localTime ?
    currentEvent?.dates?.start?.localTime.slice(0, 5) : "check time on the website";
  const city = currentEvent._embedded.venues[0].city.name;
  const country = currentEvent._embedded.venues[0].country.name;
  const standartPrice = `Standart: from ${currentEvent.priceRanges[0].min} ${currentEvent.priceRanges[0].currency} `;

  modalRefs.imgCircleEl[0].srcset = currentEvent.images[0].url;
  modalRefs.imgPosterEl[0].srcset = currentEvent.images[3].url;

  console.log(currentEvent.images);

  modalRefs.infoEl.innerHTML =
    currentEvent?.info ||
    currentEvent?.pleaseNote ||
    currentEvent?.ticketLimit?.info || 'check on the website';

  modalRefs.timeEl.innerHTML = eventTime;
  modalRefs.dateEl.innerHTML = currentEvent?.dates?.start?.localDate;
  modalRefs.cityEl.innerHTML = `${city}, ${country}`;
  modalRefs.palaceEl.innerHTML = currentEvent._embedded.venues[0].name;
  modalRefs.authorEl.innerHTML = currentEvent.name;
  modalRefs.standartPriceEl.innerHTML = standartPrice;
  modalRefs.buyTicketsBtnStEl.href = currentEvent?.url;
  modalRefs.buyTicketsBtnVipEl.href = currentEvent?.url;
  
  /////////Код Иры для кнопки "больше автора"

  //modalRefs.modalMoreAuthor.href = currentEvent._embedded.attractions[0].url;
  const inputSearch = document.querySelector('.form__input')
  modalRefs.modalMoreAuthor.addEventListener('click', () => { 
    inputSearch.value = currentEvent.name 
     } )
}

const modalMore = document.querySelector('.modal__more')
modalMore.addEventListener('click', onClose)


function onClose (e) {
  e.preventDefault()
  modalRefs.closeModalWindow.classList.add('is-hidden');
}