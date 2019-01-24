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

const presentacionTab = document.getElementById("side_presentación");
const presentacion = document.getElementById("presentacion");

const objetivosTab = document.getElementById("side_objetivos");
const objetivos = document.getElementById("objetivos");

const epidemiologiaTab = document.getElementById("side_Epidemiologíaydiagnóstico");
const epidemiologia = document.getElementById("epidemiologia");

const diagnosticoTab = document.getElementById("side_Diagnósticopatológicoymolecular");
const diagnostico = document.getElementById("diagnostico");

const tratamientoTab = document.getElementById("side_Tratamientopostquirúrgicoadyuvante");
const tratamiento = document.getElementById("tratamiento");

const inicioTab = document.getElementById("side_Tratamientodelaenfermedadnoresecabledeinicio");
const inicio = document.getElementById("inicio");

const tendenciasTab = document.getElementById("side_Tratamientoalarecaída:tendenciasactuales");
const tendencias = document.getElementById("tendencias");



const chapters = [{tab: presentacionTab, content: presentacion} ,
                  {tab: objetivosTab, content: objetivos} ,
                  {tab: epidemiologiaTab, content: epidemiologia},
                  {tab: diagnosticoTab, content: diagnostico},
                  {tab: tratamientoTab, content: tratamiento},
                  {tab: inicioTab, content: inicio},
                  {tab: tendenciasTab, content: tendencias}
                ]


  window.addEventListener('scroll', () => {
    chapters.forEach((chapter) => {
      if (chapter.content.offsetTop < (window.scrollY ) && (window.scrollY ) < (chapter.content.offsetTop + chapter.content.scrollHeight)) {
        chapter.tab.classList.add('sidebar__content__current');
        chapter.tab.classList.remove('sidebar__content__read');
        console.log(chapter)
        console.log( "chapter.content.offsetTop is" + chapter.content.offsetTop + "< a window.scrollY " + (window.scrollY )  + " y window.scrollY < (chapter.content.offsetTop + chapter.content.scrollHeight)" + (chapter.content.offsetTop + chapter.content.scrollHeight));

      } else if ((window.scrollY ) >= (chapter.content.offsetTop + chapter.content.scrollHeight)){
        chapter.tab.classList.remove('sidebar__content__current');
        chapter.tab.classList.add('sidebar__content__read');
        // console.log(chapter.tab.classList + "is" + chapter.content.offsetTop  )
      } else if (chapter.content.offsetTop > (window.scrollY ) )  {
        chapter.tab.classList.remove('sidebar__content__current');
        chapter.tab.classList.remove('sidebar__content__read');
      }
    });

});

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 921){
//     console.log("fin presentacion");
//   };
// });

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 1242){
//     console.log("fin objetivos");
//   };
// });

console.log("presentacion va de " + presentacion.offsetTop + "a" + (presentacion.offsetTop + presentacion.scrollHeight) )
console.log("objetivos va de " + objetivos.offsetTop + "a" + (objetivos.offsetTop + objetivos.scrollHeight) + "objetivos mide " + objetivos.scrollHeight)
console.log("epidemiologia va de " + epidemiologia.offsetTop + "a" + (epidemiologia.offsetTop + epidemiologia.scrollHeight) )
console.log("diagnostico va de " + diagnostico.offsetTop + "a" + (diagnostico.offsetTop + diagnostico.scrollHeight) )

// console.log(presentacion.offsetTop + "<" + (window.scrollY +500)  + "<" + (presentacion.offsetTop + presentacion.scrollHeight));
// console.log((window.scrollY +500) );
// console.log(presentacion.offsetTop + presentacion.scrollHeight);



