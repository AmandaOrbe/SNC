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


const respuesta1 = document.getElementById("Codelección1p/19qymutacióndeIDH")
const button = document.getElementById("Pregunta1")
const respuestas = [document.querySelectorAll('.form__group')[0], document.querySelectorAll('.form__group')[1], document.querySelectorAll('.form__group')[3]];
// respuestas = respuestas.splice(2, 1);
console.log(respuestas)

  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (respuesta1.checked) {
      document.querySelector(".test__answer__correct").style.maxHeight= "150rem";
      respuesta1.parentNode.querySelector(".form__orange1").classList.add("full-width");
      respuestas.forEach((respuesta) => {
        console.log(respuesta);
        respuesta.style.color = "#CCCCCC";
        respuesta.querySelector(".form__orange1").style.display = "none";
        respuesta.querySelector(".form__radio-button").style.display = "none";
        respuesta.querySelector("label").style.boxShadow = "none";
        });
    } else {
      document.querySelector(".test__answer__incorrect").style.maxHeight= "150rem";
      respuesta1.parentNode.querySelector(".form__orange1").classList.add("full-width");
      respuestas.forEach((respuesta) => {
        respuesta.style.color = "#CCCCCC";
        respuesta.querySelector(".form__radio-button").style.display = "none";
        if (respuesta.querySelector(".form__radio-input").checked) {
          respuesta.querySelector(".form__orange1").classList.add("cross1");
          respuesta.querySelector(".form__orange2").classList.add("cross2");
        }else{
          respuesta.querySelector(".form__orange1").style.display = "none";
          respuesta.querySelector(".form__orange2").style.display = "none";
         respuesta.querySelector("label").style.boxShadow = "none";
        }

        // console.log(respuesta);
        // respuesta.style.color = "#CCCCCC";
        // respuesta.querySelector(".form__orange1").style.display = "none";
        // respuesta.querySelector(".form__radio-button").style.display = "none";
        // respuesta.querySelector("label").style.boxShadow = "none";
        });
    }

    respuesta1.parentNode.querySelector(".form__orange1").classList.add("full-width")
    });

// const bigImages = document.querySelectorAll('.image-big')

// bigImages.forEach((bigImage) => {

//   bigImage.addEventListener("click", (event) => {
//     event.currentTarget.style.width = "100vw";
//     event.currentTarget.style.w = "100vw";
//   });

// });
