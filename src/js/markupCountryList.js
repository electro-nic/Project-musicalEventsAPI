import countryMarkup from '../templates/countriesList.hbs'
import country from '../country.json'
import {refs} from './refs';


refs.inputCountry.insertAdjacentHTML('beforeend', countryMarkup(country));
//при кліку на селект іконта зникає
refs.boxSelect.addEventListener('click', btnHide)

function btnHide(e){
    if(e.target.tagName === 'SELECT' ){
        refs.countryBtn.style.display = 'none';
    }
    
        // refs.countryBtn.style.display = 'block';
    
    
}

 