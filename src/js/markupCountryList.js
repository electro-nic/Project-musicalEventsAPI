import countryMarkup from '../templates/countriesList.hbs'
import country from '../country.json'
import {refs} from './refs';


refs.inputCountry.insertAdjacentHTML('beforeend', countryMarkup(country));


 