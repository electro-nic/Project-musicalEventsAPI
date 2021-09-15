import apiService from './api-connect';
import { refs } from './refs';

var debounce = require('lodash.debounce');

const nameInput = document.querySelector('#name-input');
const searchIconRef = document.querySelector('.search__icon');
const clearSearchIconRef = document.querySelector('.clear-search__icon');
const eventCardsRef = document.querySelector('.events__list');

nameInput.addEventListener('input', debounce(onIconShow, 500));

function onIconShow(e) {
    
  if (!e.target.value.length) {
    searchIconRef.style.opacity = 1;
    clearSearchIconRef.style.opacity = 0;
  } else {
    clearSearchIconRef.style.opacity = 1;
    searchIconRef.style.opacity = 0;
  }

}
