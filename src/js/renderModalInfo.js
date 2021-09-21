import { modalRefs, refs } from './refs';
import { eventsArr } from './variables';
import apiService from './api-connect';
import cardTmp from '../templates/eventsGallery';
import { openModal } from '../js/modal-close';
import { onClickScrollTop } from './onClickScrollTo'

export function renderModalInfo(index) {
  const currentEvent = eventsArr[index];
 console.log('currentEvent', currentEvent);
  const eventInfo = currentEvent?.info ||
  currentEvent?.pleaseNote ||
  currentEvent?.ticketLimit?.info || 'no additional info';
  const eventTime = currentEvent?.dates?.start?.localTime ?
    currentEvent?.dates?.start?.localTime.slice(0, 5) : "";
  const eventDate = currentEvent?.dates?.start?.localDate ? currentEvent?.dates?.start?.localDate : '';
  const eventCity = currentEvent?._embedded?.venues ? currentEvent?._embedded?.venues[0]?.city?.name : '';
  const eventCountry = currentEvent?._embedded?.venues[0]?.country?.name ? currentEvent?._embedded?.venues[0]?.country?.name : '';
  const eventPalace = currentEvent?._embedded?.venues[0]?.name ? currentEvent?._embedded?.venues[0]?.name : '';
  const price = currentEvent?.priceRanges ? `from ${currentEvent?.priceRanges[0]?.min}` : "check it out by clicking on the button below";
  const currency = currentEvent?.priceRanges ? currentEvent.priceRanges[0].currency : "";
  const eventStandartPrice = `Standart: ${price} ${currency} `;

  modalRefs.imgCircleEl[0].srcset = currentEvent.images[0].url;
  modalRefs.imgPosterEl[0].srcset = currentEvent.images[3].url;

  console.log(currentEvent.images);

  modalRefs.infoEl.innerHTML = eventInfo;
  modalRefs.dateEl.innerHTML = eventDate;
  modalRefs.timeEl.innerHTML = eventTime;
  modalRefs.cityEl.innerHTML = `${eventCity}, ${eventCountry}`;
  modalRefs.palaceEl.innerHTML = eventPalace;
  modalRefs.authorEl.innerHTML = currentEvent.name;
  modalRefs.standartPriceEl.innerHTML = eventStandartPrice;
  modalRefs.buyTicketsBtnStEl.href = currentEvent?.url;
  modalRefs.buyTicketsBtnVipEl.href = currentEvent?.url;
  
  /////////Код Иры для кнопки "больше автора"

  //modalRefs.modalMoreAuthor.href = currentEvent._embedded.attractions[0].url;
  const inputSearch = document.querySelector('.form__input')
  modalRefs.modalMoreAuthor.addEventListener('click', () => { 
    inputSearch.value = currentEvent.name 
    onClickScrollTop();
     } )
}

const modalMore = document.querySelector('.modal__more')
modalMore.addEventListener('click', onClose)


function onClose (e) {
  e.preventDefault()
  modalRefs.closeModalWindow.classList.add('is-hidden');
}