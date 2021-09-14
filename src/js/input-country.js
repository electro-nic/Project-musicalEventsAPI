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

<<<<<<< Updated upstream
import {refs} from './refs';
=======
export default {
  default: 'Choose country',
  US: 'United States Of America',
  AD: 'Andorra',
  AI: 'Anguilla',
  AR: 'Argentina',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BB: 'Barbados',
  BE: 'Belgium',
  BM: 'Bermuda',
  BR: 'Brazil',
  BG: 'Bulgaria',
  CA: 'Canada',
  CL: 'Chile',
  CN: 'China',
  CO: 'Colombia',
  CR: 'Costa Rica',
  HR: 'Croatia',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DK: 'Denmark',
  DO: 'Dominican Republic',
  EC: 'Ecuador',
  EE: 'Estonia',
  FO: 'Faroe Islands',
  FI: 'Finland',
  FR: 'France',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GB: 'Great Britain',
  GR: 'Greece',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  IE: 'Ireland',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  KR: 'Korea, Republic of',
  LV: 'Latvia',
  LB: 'Lebanon',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MY: 'Malaysia',
  MT: 'Malta',
  MX: 'Mexico',
  MC: 'Monaco',
  ME: 'Montenegro',
  MA: 'Morocco',
  NL: 'Netherlands',
  AN: 'Netherlands Antilles',
  NZ: 'New Zealand',
  ND: 'Northern Ireland',
  NO: 'Norway',
  PE: 'Peru',
  PL: 'Poland',
  PT: 'Portugal',
  RO: 'Romania',
  RU: 'Russian Federation',
  LC: 'Saint Lucia',
  SA: 'Saudi Arabia',
  RS: 'Serbia',
  SG: 'Singapore',
  SK: 'Slovakia',
  SI: 'Slovenia',
  ZA: 'South Africa',
  ES: 'Spain',
  SE: 'Sweden',
  CH: 'Switzerland',
  TW: 'Taiwan',
  TH: 'Thailand',
  TT: 'Trinidad and Tobago',
  TR: 'Turkey',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  UY: 'Uruguay',
  VE: 'Venezuela',
};
>>>>>>> Stashed changes


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