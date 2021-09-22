
const API_KEY = 'mi18OgMaUPrYWCki5ARgZtzyNs6tdZjH';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';

export default async function connect(keyword = '', page = 0, size = '', countryCode = '') {

    try {   
            const windowOuterWidth = window.outerWidth;

            if (windowOuterWidth > 767 && windowOuterWidth < 1280) {
                size = 21;
            } else {
                size = 20;
            }
            const promiseResponse = await fetch(`${BASE_URL}classificationName=music&keyword=${keyword}&page=${page}&size=${size}&countryCode=${countryCode}&sort=venueName,desc&apikey=${API_KEY}`);
            const data = await promiseResponse.json();

            return data;
    }
    catch (err) {
        console.log(err);
    }
}

    // заготовки в ссылку 
    // сортировка - &sort=${sort}, добавить параметр в функцию sort = 'name,asc'
// Sorting order of the search result. Allowable values : 'name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc', 'distance,date,asc', 'onSaleStartDate,asc', 'id,asc', 'venueName,asc', 'venueName,desc', 'random'

//вызывать функцию так
// connect('', 0, 20, '').then(data => console.log(data));