//= require jquery
//= require bootstrap
//= require_tree .

// const epilepsia = document.getElementById('epilepsia')

// Epilepsia.addEventListener("click", (event) => {
//   console.log(event);
//   console.log(event.currentTarget.classList.toggle("card__hidden"));
//    // event.currentTarget.classList.toggle("img-circle");
// });


const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  console.log(card);
  card.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.currentTarget.classList.toggle("card__hidden"));
  });

});

// Epilepsia.addEventListener("click", (event) => {
//   console.log(event);
//   console.log(event.currentTarget.classList.toggle("card__hidden"));
//    // event.currentTarget.classList.toggle("img-circle");
// });
