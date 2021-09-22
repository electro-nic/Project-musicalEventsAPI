import { refs } from './refs'
import { onGreatGalleryEvents } from './renderGalleryCards'
import { onStartEventsLoad } from './pagination';

refs.clearBtn.addEventListener('click', onClearBtn)

function onClearBtn(e) {
e.preventDefault()
refs.nameInput.value = '';
resetSelect()
onGreatGalleryEvents();
onStartEventsLoad();


}

function resetSelect() {
    const dropDown = document.getElementById("country");
    dropDown.selectedIndex = 0;
}