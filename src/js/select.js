import apiService from './api-connect';
import { refs } from './refs';
import cardTmp from '../templates/eventsGallery'; 
import debounce from 'lodash.debounce';
import { openModal } from '../js/modal-close';
import { eventsArr } from '../js/variables';
import { creatGalleryCards} from './input-search';

import { error, alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';


refs.inputCountry.addEventListener('change', onChangeCountries);

refs.inputCountry.addEventListener('mouseover', onIconHide);
function onIconHide(e){
    if(e.target.tagName === 'SELECT' ){
        // refs.countryBtn.classList.add('hidebtn')
        refs.countryBtn.style.display = 'none';
    } 
    else {
        refs.countryBtn.style.display = 'block';
    //    refs.countryBtn.classList.remove('hidebtn') 
    }
    // refs.countryBtn.classList.remove('hidebtn')
    // if(!e.target.tagName === 'SELECT' ){
    //     refs.countryBtn.classList.remove('hidebtn')
    // }
} 

function onChangeCountries(e){
    e.preventDefault();
    const countryCode = refs.inputCountry.value;
    console.log(countryCode);
    refs.eventList.innerHTML = '';
    const fetch = apiService('', 0, 20, countryCode);
    fetch.then(data => 
        
        creatGalleryCards(data._embedded.events)
        )
}
// const nameInput = document.querySelector('#name-input');
// refs.inputCountry.addEventListener('change', onChangeEventsByCountries);
// function onChangeEventsByCountries(e){
//     e.preventDefault();
//     const countryCode = refs.inputCountry.value;
//     const keyword = nameInput.value;
//     refs.eventList.innerHTML = '';
//     const obj = apiService(keyword, 0, 20, countryCode );
//     obj.then(data => console.log(data))
//    obj.then(data => {
//      if (data.page.totalElements === 0 || keyword.length === 0 || keyword.length <= 1) {
//        return  onError()
//      } 
//      else {
//        creatGalleryCards(data._embedded.events);
//      }
//    })
//     .catch(err => console.log(err))
// };

