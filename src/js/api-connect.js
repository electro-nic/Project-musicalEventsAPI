const API_KEY = 'Ci1vLtAQ5toUQm0alN6gL6AfnGn8TpWy';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';

export default async function connect(keyword = '', page = 0, size = 20, countryCode = '', sort = 'date,asc') {

    try {
        const promiseResponse = await fetch(`${BASE_URL}classificationName=music&dmaId=324&apikey=${API_KEY}&keyword=${keyword}&page=${page}&size=${size}&countryCode=${countryCode}&sort=${sort}`);
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
// const obj = connect('', 0, 20, '');

// obj.then(log => console.log(log));

