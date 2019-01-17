//= require jquery
//= require bootstrap
//= require_tree .

// CARD TOGGLE

const cards = document.querySelectorAll('.card')

cards.forEach((card) => {

  card.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("card__visible");
  });

});



// const bigImages = document.querySelectorAll('.image-big')

// bigImages.forEach((bigImage) => {

//   bigImage.addEventListener("click", (event) => {
//     event.currentTarget.style.width = "100vw";
//     event.currentTarget.style.w = "100vw";
//   });

// });
