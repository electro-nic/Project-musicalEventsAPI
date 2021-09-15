// Consumer Key	vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG
//https://app.ticketmaster.com/discovery/v2/events.json?apikey=vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG

//Root URL
//https://app.ticketmaster.com/discovery/v2/

//Get a list of all events in the United States 
//https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG

// const API_KEY = 'vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG';
// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/venues.json?';

// //https://app.ticketmaster.com/discovery/v2/venues.json?keyword=UCV&apikey=vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG

import {refs} from './refs';

const API_KEY = 'vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG';
const BASE_URL = 'https://app.ticketmaster.com/discovery-feed/v2/events?';

async function fetchCountries(name) {
  const promiseCoutries = await fetch(`${BASE_URL}apikey=${API_KEY}`);
  const countryData = promiseCoutries.json();
  return countryData;
  
}

refs.inputCountry.addEventListener('click',onCountryBtnClick)

async function onCountryBtnClick(e){
  e.preventDefault();
  try{
    const countryFetch = await fetchCountries(country)
    .then(elems=>
 feature/input-country
      // console.log(elems.countries))
       forObject(elems.countries))
      console.log(elems.countries),
       onCountryCreate(elems))

  }
  catch(err){
  console.log(err);
}
}

function onCountryCreate(obj){
  const optionEl= Object.keys(obj)
  console.log(optionEl)
 feature/input-country
    const listCountry = optionEl.map((el)=>{
    console.log(el);
    const itemCountries = document.createElement('option');
    itemCountries.setAttribute('value', `${el}`);
    // itemCountries.append(el)
   console.log(itemCountries);
   return itemCountries;
   
  })
  console.log(listCountry)
  refs.menu.insertAdjacentHTML('beforeend',listCountry) 

   
  // const listCountry = optionEl.map((el)=>{
  //   const itemCountries = document.createElement('option');
  //   itemCountries.setAttribute('value',`${el}`)
  //   // itemCountries.append(el)//поставити назву країн
  // console.log(itemCountries)
  //  return itemCountries;
 
  // })

  
  //  return listCountry

}

  return refs.menu.insertAdjacentHTML('beforeend',listCountry) 


  // const listCountry=option.map((el)=>{
  //   return `<option  value="${el}">${el}</option>`})
      // console.log(listCountry.join(''))
  


//   const listCountry=optionEl.map((el)=>{
//     const itemCountries = document.createElement('li');
//     itemCountries.append(el)
//     return itemCountries;
//   })
//   refs.list.append(...listCountry)
// }

// function mapObject(elems){
//   const options= elems.map((el)=>{
//       return `<option class='optin-coutries-list' value="${el.country_code}">${el.country_code}</option>`})
//       refs.menu.insertAdjacentHTML('beforeend',options.join(''))
// }

// function createCountries(e) {
//         e.preventDefault();
//         const options = countryFetch.map((alphaCode,name)=>{
//         return <option class='optin-coutries-list' value="${alphaCode}">${name}</option>;
//       })

// }
      //   const options = countryCodes.map(({ alphaCode, name}) => {
      //       return <option class='optin-coutries-list' value="${alphaCode}">${name}</option>;
      //   })
      //   countryCode.insertAdjacentHTML('beforeend', options.join(''))
// function renderCountries(country){
//   const markup = CountryList(country);
//   refs.menu.insertAdjacentHTML('beforeend',markup)
// }