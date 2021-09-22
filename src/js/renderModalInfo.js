import { modalRefs, refs } from './refs';
import { eventsArr } from './variables';
import apiService from './api-connect';
import cardTmp from '../templates/eventsGallery';
import { openModal } from '../js/modal-close';
import { onClickScrollTop } from './onClickScrollTo'
import { creatGalleryCards} from './input-search';
import { setPagination } from './pagination'


export function renderModalInfo(index) {
  const currentEvent = eventsArr[index];
  const eventInfo = currentEvent?.info ||
  currentEvent?.pleaseNote ||
  currentEvent?.ticketLimit?.info || 'no additional info';
  const eventTime = currentEvent?.dates?.start?.localTime ?
    currentEvent?.dates?.start?.localTime.slice(0, 5) : "";
  const eventDate = currentEvent?.dates?.start?.localDate ? currentEvent?.dates?.start?.localDate : '';
  const eventCity = currentEvent?._embedded?.venues ? currentEvent?._embedded?.venues[0]?.city?.name : '';
  const eventCountry = currentEvent?._embedded?.venues ? currentEvent?._embedded?.venues[0]?.country?.name : "";
  const eventPalace = currentEvent?._embedded?.venues ? currentEvent?._embedded?.venues[0]?.name : '';
  const price = currentEvent?.priceRanges ? `from ${currentEvent?.priceRanges[0]?.min}` : "click on the button below";
  const currency = currentEvent?.priceRanges ? currentEvent.priceRanges[0].currency : "";
  const eventStandartPrice = `Standart: ${price} ${currency} `;

  modalRefs.imgCircleEl[0].srcset = currentEvent?.images[0]?.url;
  modalRefs.imgPosterEl[0].srcset = currentEvent?.images[3]?.url;

  modalRefs.infoEl.innerHTML = eventInfo;
  modalRefs.dateEl.innerHTML = eventDate;
  modalRefs.timeEl.innerHTML = eventTime;
  modalRefs.cityEl.innerHTML = `${eventCity}, ${eventCountry}`;
  modalRefs.palaceEl.innerHTML = eventPalace;
  modalRefs.authorEl.innerHTML = currentEvent.name;
  modalRefs.standartPriceEl.innerHTML = eventStandartPrice;
  modalRefs.buyTicketsBtnStEl.href = currentEvent?.url;
  modalRefs.buyTicketsBtnVipEl.href = currentEvent?.url;
  
  const inputSearch = document.querySelector('.form__input')
  modalRefs.modalMoreAuthor.addEventListener('click', onMoreFromAuthorClick)
  

  function onMoreFromAuthorClick (e) { 
    e.preventDefault();
    modalRefs.closeModalWindow.classList.add('is-hidden');

    const keyword = currentEvent?._embedded?.attractions ? currentEvent?._embedded?.attractions[0]?.name : currentEvent?.name;

    const countryCode = '';
    apiService(keyword, 0, 20, countryCode).
    then(data => {
      refs.eventList.innerHTML = cardTmp(data._embedded.events);

         eventsArr.splice(0, 20);
         eventsArr.push(...data._embedded.events);
      document
        .querySelectorAll('.events__item')
        .forEach(event => event.addEventListener('click', openModal));

        const totalElements = data.page.totalElements;
        setPagination(totalElements);

    })
     .catch(err => console.log(err))};
     } 



