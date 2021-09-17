export const refs = {
  form: document.querySelector('.form'),
  eventList: document.querySelector('#js-events__list'),
  btnToTop: document.querySelector('.js-button'),
  menu: document.querySelector('#country-code'),
  inputCountry: document.querySelector('#country'),
  countryBtn: document.querySelector('#countryBtn'),
  list: document.querySelector('.list-country'),
  listItem: document.querySelector('.item-country'),
  inputCountry: document.querySelector('#country'),
};

export const modalRefs = {
  imgPosterEl: document.querySelectorAll('.modal__poster'),
  imgCircleEl: document.querySelectorAll('.modal__circle'),
  infoEl: document.querySelector('#modal-info'),
  dateEl: document.querySelector('#modal-date'),
  timeEl: document.querySelector('#modal-time'),
  cityEl: document.querySelector('#modal-city'),
  countryEl: document.querySelector('#modal-country'),
  palaceEl: document.querySelector('#modal-palace'),
  authorEl: document.querySelector('#modal-author'),
  standartPriceEl: document.querySelector('#modal-prices'),
  buyTicketsBtnStEl: document.querySelector('#buy-tickets-btn-standart'),
  buyTicketsBtnVipEl: document.querySelector('#buy-tickets-btn-vip'),
  closeModalWindow: document.querySelector('.modal__backdrop'),
  closeModalBtn: document.querySelector('[data-action="close-modal__backdrop"]'),
  modalMoreAuthor: document.querySelector('#modal__more')
};
