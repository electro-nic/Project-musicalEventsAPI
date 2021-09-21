import { modalRefs, refs } from './refs';
import { eventsArr } from './variables';
import apiService from './api-connect';
import cardTmp from '../templates/eventsGallery';
import { openModal } from '../js/modal-close';
import { onClickScrollTop } from './onClickScrollTo'
// import {onChangeCountries} from './select'
import { creatGalleryCards} from './input-search';


export function renderModalInfo(index) {
  const currentEvent = eventsArr[index];
 console.log('currentEvent', currentEvent);
  const eventInfo = currentEvent?.info ||
  currentEvent?.pleaseNote ||
  currentEvent?.ticketLimit?.info || 'check on the website';
  const eventTime = currentEvent?.dates?.start?.localTime ?
    currentEvent?.dates?.start?.localTime.slice(0, 5) : "check time on the website";
  const eventDate = currentEvent?.dates?.start?.localDate ? currentEvent?.dates?.start?.localDate : 'check on the website';
  const eventCity = currentEvent?._embedded?.venues ? currentEvent?._embedded?.venues[0]?.city?.name : "city look on the website";
  const eventCountry = currentEvent?._embedded?.venues[0]?.country?.name ? currentEvent?._embedded?.venues[0]?.country?.name : "country look on the website";
  const eventPalace = currentEvent?._embedded?.venues[0]?.name ? currentEvent?._embedded?.venues[0]?.name : 'check on the website';
  const price = currentEvent?.priceRanges ? `from ${currentEvent?.priceRanges[0]?.min}` : "check on the website";
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
  modalRefs.modalMoreAuthor.addEventListener('click', onMoreFromAuthorClick)
  

  function onMoreFromAuthorClick (e) { 
    e.preventDefault();
    modalRefs.closeModalWindow.classList.add('is-hidden');

    let keyword = currentEvent.name;
    const countryCode = refs.inputCountry.value;
    console.log('keyword', keyword);
    // inputSearch.value = currentEvent.name; 
    // onClickScrollTop();
    // onFetch();
    apiService(keyword, 0, 20, countryCode).
    then(data => {
      console.log('inputSearch.value', inputSearch.value);
      console.log(data); 
      inputSearch.value = keyword;

      refs.eventList.innerHTML = cardTmp(data._embedded.events);
// или можно вызвать creatGalleryCards(data._embedded.events), если в ней поменять на innerhtml



      // creatGalleryCards(data._embedded.events);
      console.log(data._embedded.events);

    })
     .catch(err => console.log(err))};

    refs.nameInput.value = currentEvent.name; 

     } 


// function onFetch(){
//   // refs.nameInput.value = currentEvent.name; 
//   const countryCode = refs.inputCountry.value;
// const keyword = refs.nameInput.value;
// console.dir(keyword);
//   console.log(countryCode);
//   refs.eventList.innerHTML = '';
//   const fetch = apiService(keyword, 0, 20, countryCode);
//   fetch.then(data => 
      
//       creatGalleryCards(data._embedded.events)
//       )
// }




