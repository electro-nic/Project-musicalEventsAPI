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
  modalRefs.modalMoreAuthor.addEventListener('click', onMoreFromAuthorClick)
  

  function onMoreFromAuthorClick (e) { 
    e.preventDefault();
    modalRefs.closeModalWindow.classList.add('is-hidden');

    // по первому слову
    // const keyword = currentEvent.name.split(' ')[0];

    const keyword = currentEvent?._embedded?.attractions[0]?.name || currentEvent?.name;


    const countryCode = '';
    console.log('keyword', keyword);
    apiService(keyword, 0, 20, countryCode).
    then(data => {
      console.log('inputSearch.value', inputSearch.value);
      inputSearch.value = keyword;

      refs.eventList.innerHTML = cardTmp(data._embedded.events);
      refs.nameInput.value = currentEvent.name; 

// или можно вызвать creatGalleryCards(data._embedded.events), если в ней поменять на innerhtml

         eventsArr.splice(0, 20);
         eventsArr.push(...data._embedded.events);
      document
        .querySelectorAll('.events__item')
        .forEach(event => event.addEventListener('click', openModal));


      // creatGalleryCards(data._embedded.events);
      console.log(data._embedded.events);

    })
     .catch(err => console.log(err))};


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




