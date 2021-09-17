// const moreAuthorBtn = document.querySelector('.modal__more');
// const inputSearch = document.querySelector('.form__input')
// import connectApi from './api-connect';
// import onGreatGalleryEvents from './renderGalleryCards'

// // const handlerSubmit = (data) => {
// // console.log(data._embedded.attractions)
// // //inputSearch.query = e.target.dataset.name;
// // }


// let authorName;

// function handlerSubmit() {
 
//   try {
//     connectApi().then(data => {
//       console.log((data._embedded.events).map(el=> el.name));
//       console.log(data._embedded.events[1].name)
//       // const fixedResponce = (data._embedded.events).filter
//       //authorName = fixedResponce._embedded.events['0'].name;
//       //refs.eventList.insertAdjacentHTML('afterbegin', cardTmp(data._embedded.events));
//       inputSearch.value = data._embedded.events[1].name;
//     })
//   } catch (error) {
//     console.log(error.message);
//   }
//   //onGreatGalleryEvents()
  

// }

// moreAuthorBtn.addEventListener('click', handlerSubmit)