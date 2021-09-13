// const API_KEY = 'Ci1vLtAQ5toUQm0alN6gL6AfnGn8TpWy';
// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';

// export default async function connect(keyword = '', page = 0, size = 20) {
//     // заготовки в ссылку 
//     // сортировка - &sort=${sort}, добавить параметр в функцию sort = 'name,asc'

//     try {
//         const promiseResponse = await fetch(`${BASE_URL}classificationName=music&dmaId=324&apikey=${API_KEY}&keyword=${keyword}&page=${page}&size=${size}`);
//         const data = await promiseResponse.json();

//         return data;
//     }
//     catch (err) {
//         console.log(err);
//     }   
// }


// // вызывать функциб можно так, тут log - это объект с результатами от бекенда
// const obj = connect(event);
// obj.then(log => console.log(log));



const API_KEY = 'Ci1vLtAQ5toUQm0alN6gL6AfnGn8TpWy';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';

export default async function connect(keyword = '', page = 0, size = 20) {
    // заготовки в ссылку 
    // сортировка - &sort=${sort}, добавить параметр в функцию sort = 'name,asc'

    try {
        const promiseResponse = await fetch(`${BASE_URL}classificationName=music&dmaId=324&apikey=${API_KEY}&countryCode=${keyword}`);
        const data = await promiseResponse.json();

        return data;
    }
    catch (err) {
        console.log(err);
    }   
}


// вызывать функциб можно так, тут log - это объект с результатами от бекенда
// const obj = connect('US');
// obj.then(log => console.log(log));