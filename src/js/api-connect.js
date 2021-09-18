const API_KEY = 'AGcGkGLirWXVP1TBWnNfEanVNPgcYNS9';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';
let arr = [];
let currentPage = 0;


export default async function connect(keyword = '', page = 0, size = 20, countryCode = '') {

    try {
        const promiseResponse = await fetch(`${BASE_URL}classificationName=music&apikey=${API_KEY}&keyword=${keyword}&page=${page}&size=${size}&countryCode=${countryCode}`);
        const data = await promiseResponse.json();

        // return data;

        if (data.page.totalPages > 1) {   
        for (let i = 0; i < 4; i++) {
        const promiseResponse = await fetch(`${BASE_URL}classificationName=music&dmaId=324&apikey=${API_KEY}&keyword=${keyword}&page=${currentPage}&size=${size}&countryCode=${countryCode}`);
        const data = await promiseResponse.json();
            arr.push(...data._embedded.events);
            ++currentPage;
            }
            
            // console.log(`${keyword} ` , arr);
            currentPage = 0;

            return data;
    }

        
        else {
            return data;
        }



    }
    catch (err) {
        console.log(err);
    }
}

    // заготовки в ссылку 
    // сортировка - &sort=${sort}, добавить параметр в функцию sort = 'name,asc'
// Sorting order of the search result. Allowable values : 'name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc', 'distance,date,asc', 'onSaleStartDate,asc', 'id,asc', 'venueName,asc', 'venueName,desc', 'random'

//вызывать функцию так
const obj = connect('', 0, 20, '');

obj.then(log => console.log(log));




