import refs from '../js/refs';

class ApiService {
  constructor() {
    this.API_KEY = 'R6T2f5StA43ZJAlAODPBSAJJjoAoGQks';
    this.BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';

    this._keyword = '';
    this._countryCode = '';
    this._size = 20;
    this._page = 0;
  }

  
  fetchEvent() {
    const url = `${this.BASE_URL}.json?keyword=${this._keyword}&classificationName=music&countryCode=${this._countryCode}&size=${this._size}&page=${this._page}&apikey=${this.API_KEY}&sort=random`;
 

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.page.totalElements === 0) {
          // refs.pagination.classList.add('visually-hidden');
          throw error({
            title: 'No results found',
            delay: 2000,
            styling: 'material',
            sticker: false,
            mode: 'dark',
            closerHover: true,
            width: '280px',
          });
        } else {

          const pagination = document.querySelector('#pagination');
          pagination.classList.remove('visually-hidden');

          // refs.pagination.classList.remove('visually-hidden');

          return data;
        }
      })
      .catch();
  }

 
  fetchEventById(id) {
    const url = `${this.BASE_URL}/${id}.json?&apikey=${this.API_KEY}`;
    return fetch(url).then(response => response.json());
  }

  resetPage() {
    this._page = 0;
  }

  get keyword() {
    return this._keyword;
  }

  set keyword(value) {
    this._keyword = value;
  }

  get countryCode() {
    return this._countryCode;
  }

  set countryCode(value) {
    this._countryCode = value;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get page() {
    return this._page;
  }

  set page(value) {
    this._page = value;
  }
}

export default new ApiService();
