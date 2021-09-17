
import {refs} from './refs';

const API_KEY = 'Ci1vLtAQ5toUQm0alN6gL6AfnGn8TpWy'; //'vHwA8wPXBKX2TH3dmOzAbzhop6A7jZPG';
const BASE_URL = 'https://app.ticketmaster.com/discovery-feed/v2/events?';

async function fetchCountries(countryCode) {
  const promiseCoutries = await fetch(`${BASE_URL}apikey=${API_KEY}`);
  const countryData = promiseCoutries.json();
  return countryData;
  
}


refs.inputCountry.addEventListener('click', onCountryBtnClick)
// refs.countryBtn.addEventListener('click',onCountryBtnClick)

async function onCountryBtnClick(e){
  e.preventDefault();
  try{
    const countryFetch = await fetchCountries(country)
    .then(elems=>
      // console.log(elems)
       onCountryCreate(elems.countries)
    )}
  catch(err){
  console.log(err);
}
}
async function onCountryCreate (obj){
    const optionEl= Object.keys(obj)
    console.log(optionEl)
    const listCountry = optionEl.map((el) => {
      const itemCountries = `<option class='input-country' value="${el}">${el}</option>`;
      console.log(itemCountries);
      return itemCountries;
    })
  refs.inputCountry.insertAdjacentHTML('beforeend',listCountry)
}
// function createCountriesSelect() {
//   const options = countryCodes.map(({ alphaCode, name }) => {
//     // деструктуризація елементів масиву обєктів країн
//     return <option class='option-coutries-list' value="${alphaCode}">${name}</option>; //
//   });
//   selectRef.insertAdjacentHTML('beforeend', options.join('')); 
// }
// createCountriesSelect();



  //   const listMarkup = cardCountry(optionEl);

  // refs.inputCountry.insertAdjacentHTML('beforeend', listMarkup);

  //  const options= optionEl.map((el)=>{
  //    return `<option  value="${el.country_code}">${el.country_code}</option>`})
  //     refs.menu.insertAdjacentHTML('beforeend',options.join(''))

  //  }
  //   const listCountry = optionEl.map((el)=>{
  //   console.log(el);
  //   const itemCountries = document.createElement('option');
  //   itemCountries.setAttribute('value', `${el}`);
  //   // itemCountries.append(el)
  //  console.log(itemCountries);
  //  return itemCountries;
   
 
  // )
  // console.log(listCountry)
  // refs.inputCountry.insertAdjacentHTML('beforeend',listCountry) 

   
  // const listCountry = optionEl.map((el)=>{
  //   const itemCountries = document.createElement('option');
  //   itemCountries.setAttribute('value',`${el}`)
  //   // itemCountries.append(el)//поставити назву країн
  // console.log(itemCountries)
  //  return itemCountries;
 
  // })

  
  //  return listCountry

// }

  // return refs.menu.insertAdjacentHTML('beforeend',listCountry) 


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