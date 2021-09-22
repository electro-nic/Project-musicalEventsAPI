import { refs } from './refs'

refs.clearBtn.addEventListener('click', onClearBtn)

function onClearBtn(e) {
e.preventDefault()
refs.nameInput.value = '';
resetSelect()
}

function resetSelect() {
    const dropDown = document.getElementById("country");
    dropDown.selectedIndex = 0;
}