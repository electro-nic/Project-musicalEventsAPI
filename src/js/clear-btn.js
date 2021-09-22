import { refs } from './refs'
import { onGreatGalleryEvents } from './renderGalleryCards'

refs.clearBtn.addEventListener('click', onClearBtn)

function onClearBtn(e) {
e.preventDefault()
refs.nameInput.value = '';
resetSelect()
onGreatGalleryEvents()
}

function resetSelect() {
    const dropDown = document.getElementById("country");
    dropDown.selectedIndex = 0;
}