import apiService from './api-connect';
import { refs } from './refs';
import cardTmp from '../templates/eventsGallery'; 
import { openModal } from '../js/modal-close';
import { eventsArr } from '../js/variables';
import { creatGalleryCards} from './input-search';
import { cloneDeep } from 'lodash';
import {onError} from './input-search';
import {paginationNone} from './input-search'


refs.inputCountry.addEventListener('change', onChangeCountries);
refs.boxSelect.addEventListener('click',onIconMoveClick)
refs.inputCountry.addEventListener('mouseover', onIconManipulate);

//ф-ція повороту іконки
function onIconMoveClick(){
refs.countryIcon.style.transform = (refs.countryIcon.style.transform == 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)'
}
//ф-ція для кнопки-стає пробивна
function onIconManipulate(e){
    if(e.target.tagName === 'SELECT' ){
        refs.countryBtn.classList.add('hidebtn')
    } 
    else {

       refs.countryBtn.classList.remove('hidebtn') 
    }
} 
//ф-ція ренду карток по країнах
function onChangeCountries(e){
    e.preventDefault();
    const countryCode = refs.inputCountry.value;
  const keyword = refs.nameInput.value;
  console.dir(keyword);
    console.log(countryCode);
    refs.eventList.innerHTML = '';
    const fetch = apiService(keyword, 0, 20, countryCode);
    fetch.then(data => {
        if( countryCode === 'All countries'){
            return;
        }
        else{
        creatGalleryCards(data._embedded.events)
    }
    })
    .catch(err => {
        paginationNone(); 
        onError()})
};


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

