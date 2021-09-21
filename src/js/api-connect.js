
const API_KEY = 'Ci1vLtAQ5toUQm0alN6gL6AfnGn8TpWy';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';

export default async function connect(keyword = '', page = 0, size = 20, countryCode = '') {

    try {
        const objData = {
            page : page,
            _embedded: {events: []},
            _links: [],
        }
        let currentPage = 1;
        const promiseResponse = await fetch(`${BASE_URL}classificationName=music&keyword=${keyword}&page=${page}&size=${size}&countryCode=${countryCode}&sort=date,asc&apikey=${API_KEY}`);
        const data = await promiseResponse.json();

        objData.page = data.page;
        objData._links = data._links;
        objData._embedded.events.push(...data._embedded.events);  

        return objData;

    //     if (data.page.totalPages > 1) {   
    //     for (let i = 1; i < 4; i++) {
    //     const promiseResponse = await fetch(`${BASE_URL}classificationName=music&dmaId=324&apikey=${API_KEY}&keyword=${keyword}&page=${currentPage}&size=${size}&countryCode=${countryCode}`);
    //     const data = await promiseResponse.json();
    //         objData._embedded.events.push(...data._embedded.events);            
    //         ++currentPage;
    //         }
    //         currentPage = 1;
    //         return objData;
    // }
    //     else {
    //         return data;
    //     }
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




