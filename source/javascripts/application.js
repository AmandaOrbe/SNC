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

// **********************************QUIZ****************************

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
        respuesta.querySelector(".form__orange2").style.display = "none";
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
      });
    }

    respuesta1.parentNode.querySelector(".form__orange1").classList.add("full-width")
    });




const respuesta2 = document.getElementById("Procarbacina,lomustinayvincristina")
const button2 = document.getElementById("Pregunta2")
const respuestas2 = [document.querySelectorAll('.form__group')[4], document.querySelectorAll('.form__group')[5], document.querySelectorAll('.form__group')[7]];
// respuestas = respuestas.splice(2, 1);
console.log(respuestas2)

  button2.addEventListener("click", (event) => {
    event.preventDefault();
    if (respuesta2.checked) {
      document.querySelector(".test__answer__correct2").style.maxHeight= "150rem";
      respuesta2.parentNode.querySelector(".form__orange1").classList.add("full-width");
      respuestas2.forEach((respuesta) => {
        console.log(respuesta);
        respuesta.style.color = "#CCCCCC";
        respuesta.querySelector(".form__orange1").style.display = "none";
        respuesta.querySelector(".form__orange2").style.display = "none";
        respuesta.querySelector(".form__radio-button").style.display = "none";
        respuesta.querySelector("label").style.boxShadow = "none";
        });
    } else {
      document.querySelector(".test__answer__incorrect2").style.maxHeight= "150rem";
      respuesta2.parentNode.querySelector(".form__orange1").classList.add("full-width");
      respuestas2.forEach((respuesta) => {
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
      });
    }

    respuesta2.parentNode.querySelector(".form__orange1").classList.add("full-width")
    });

// **********************************SIDEBAR****************************



const diagnosticoHeight = document.getElementById("diagnostico").scrollHeight;
const epidemiologia = document.getElementById("side_Epidemiología")

window.addEventListener('scroll', () => {
      if (window.scrollY >= diagnosticoHeight + 700) {
        epidemiologia.classList.add('sidebar__content__read');
      } else {
        console.log("miau");
      }
    });









