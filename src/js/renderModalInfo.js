import { modalRefs } from './refs';
import { eventsArr } from './variables';

export function renderModalInfo(index) {
  console.log('data:', eventsArr[index]);

  const currentEvent = eventsArr[index];
  console.log('data:', currentEvent);

  const eventTime = currentEvent.dates.start.localTime.slice(0, 5);
  const city = currentEvent._embedded.venues[0].city.name;
  const country = currentEvent._embedded.venues[0].country.name;
  const standartPrice = `Standart: from ${currentEvent.priceRanges[0].min} ${currentEvent.priceRanges[0].currency} `;
  console.log('eventTime:', eventTime);

  modalRefs.infoEl.innerHTML =
    currentEvent.info ||
    currentEvent.pleaseNote ||
    currentEvent.ticketLimit.info;

  modalRefs.timeEl.innerHTML = eventTime;
  modalRefs.dateEl.innerHTML = currentEvent.dates.start.localDate;
  modalRefs.cityEl.innerHTML = `${city}, ${country}`;
  modalRefs.palaceEl.innerHTML = currentEvent._embedded.venues[0].name;
  modalRefs.authorEl.innerHTML = currentEvent.name;
  modalRefs.standartPriceEl.innerHTML = standartPrice;
}
