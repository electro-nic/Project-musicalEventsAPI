// Consumer Key	vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG
//https://app.ticketmaster.com/discovery/v2/events.json?apikey=vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG

//Root URL
//https://app.ticketmaster.com/discovery/v2/

//Get a list of all events in the United States 
//https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG

// const API_KEY = 'vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG';
// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/venues.json?';

// //https://app.ticketmaster.com/discovery/v2/venues.json?keyword=UCV&apikey=vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG

// export default async function fetchLocale(locale = '') {
//     // заготовки в ссылку 
//     // сортировка - &sort=${sort}, добавить параметр в функцию sort = 'name,asc'

//     try {
//         const promiseLocale = await fetch(`${BASE_URL}countryCode=U${locale}&apikey=${API_KEY }`);
//         const data = await promiseLocale.json();
//         return data;
//         console.log(data)
//     }
//     catch (err) {
//         console.log(err);
//     }   
// }
// // fetchLocale('UK')
// console.log(fetchLocale('UK'))

import {refs} from './refs';


function fetchCountries(name) {
    const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${name}&apikey=vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG`;
    return fetch(BASE_URL).then(response => response.json());
}

// const obj =fetchCountries('US')
// obj.then(log=>console.log(log))


refs.inputCountry.addEventListener('input', countrySearchInput)

function countrySearchInput(e){
    e.preventDefault();
    const searchQuery=e.target.value;
    
    fetchCountries(searchQuery).then(elems=>{
        console.log(elems._embedded.events)
        // if(elems.status===404){
        //     console.log(elems.status);
        //     console.log('Такої країни немає у пошуку!')
        // } 
        //     renderCountriesList(elems)
    
    })
    .catch((err) => console.log(err))

}

// function renderCountriesList(country){
//     const listMarkup = listCountryEl(country);

//   refs.countriesList.insertAdjacentHTML('beforeend', listMarkup);
// }