//= require jquery
//= require bootstrap
//= require_tree .

// CARD TOGGLE

const cards = document.querySelectorAll('.card')

// cards.forEach((card) => {

//   card.addEventListener("click", (event) => {
//     event.currentTarget.classList.toggle("card__visible");
//     event.currentTarget.querySelector("i").classList.toggle("fa-plus");
//     event.currentTarget.querySelector("i").classList.toggle("fa-minus");

//   });

// });

// **********************************CONSTANS****************************

const radioInputs = document.querySelectorAll('.form__radio-input');


const respuestaCorrecta1 = document.getElementById("Codelección1p/19qymutacióndeIDH");
const button1 = document.getElementById("pregunta1__button");
const question1 = document.getElementById("pregunta1");
const respuestasIncorrectas1 = [document.querySelectorAll('.form__group')[0], document.querySelectorAll('.form__group')[1], document.querySelectorAll('.form__group')[3]];
const question1Inputs = [radioInputs[0], radioInputs[1], radioInputs[2], radioInputs[3]];
const testAnswerCorrect1 = document.querySelector(".test__answer__correct");
const testAnswerInorrect1 = document.querySelector(".test__answer__incorrect");

const respuestaCorrecta2 = document.getElementById("Procarbacina,lomustinayvincristina")
const button2 = document.getElementById("pregunta2__button")
const question2 = document.getElementById("pregunta2");
const respuestasIncorrectas2 = [document.querySelectorAll('.form__group')[4], document.querySelectorAll('.form__group')[5], document.querySelectorAll('.form__group')[7]];
const question2Inputs = [radioInputs[4], radioInputs[5], radioInputs[6], radioInputs[7]];
const testAnswerCorrect2 = document.querySelector(".test__answer__correct2");
const testAnswerInorrect2 = document.querySelector(".test__answer__incorrect2");



const respuestaCorrecta3 = document.getElementById("Observaciónytratamientoalarecaída")
const button3 = document.getElementById("pregunta3__button")
const question3 = document.getElementById("pregunta3");
const respuestasIncorrectas3 = [document.querySelectorAll('.form__group')[9], document.querySelectorAll('.form__group')[10]];
const question3Inputs = [radioInputs[8], radioInputs[9], radioInputs[10]];
const testAnswerCorrect3 = document.querySelector(".test__answer__correct3");
const testAnswerInorrect3 = document.querySelector(".test__answer__incorrect3");


const respuestaCorrecta4 = document.getElementById("Radioterapia50.4–54GyseguidodePCVx6ciclos")
const button4 = document.getElementById("pregunta4__button")
const question4 = document.getElementById("pregunta4");
const respuestasIncorrectas4 = [document.querySelectorAll('.form__group')[11], document.querySelectorAll('.form__group')[12]];
const question4Inputs = [radioInputs[11], radioInputs[12], radioInputs[13]];
const testAnswerCorrect4 = document.querySelector(".test__answer__correct4");
const testAnswerInorrect4 = document.querySelector(".test__answer__incorrect4");


const presentacionTab = document.getElementById("side_Presentación");
const presentacion = document.getElementById("Prese");

const objetivosTab = document.getElementById("side_Objetivos");
const objetivos = document.getElementById("Objet");

const epidemiologiaTab = document.getElementById("side_1.Epidemiologíaydiagnóstico");
const epidemiologia = document.getElementById("1.Epi");

const diagnosticoTab = document.getElementById("side_2.Diagnósticopatológicoymolecular");
const diagnostico = document.getElementById("2.Dia");

const tratamientoTab = document.getElementById("side_3.Tratamientopostquirúrgicoadyuvante");
const tratamiento = document.getElementById("3.Tra");

const inicioTab = document.getElementById("side_4.Tratamientodelaenfermedadnoresecabledeinicio");
const inicio = document.getElementById("4.Tra");

const tendenciasTab = document.getElementById("side_5.Tratamientoalarecaída:tendenciasactuales");
const tendencias = document.getElementById("5.Tra");

const pregunta1Tab = document.getElementById("side_pregunta1");
const pregunta1 = document.getElementById("pregunta1");

const pregunta2Tab = document.getElementById("side_pregunta2");
const pregunta2 = document.getElementById("pregunta2");



const chapters = [{tab: presentacionTab, content: presentacion} ,
                  {tab: objetivosTab, content: objetivos} ,
                  {tab: epidemiologiaTab, content: epidemiologia},
                  {tab: diagnosticoTab, content: diagnostico},
                  {tab: tratamientoTab, content: tratamiento},
                  {tab: inicioTab, content: inicio},
                  {tab: tendenciasTab, content: tendencias},
                ]

const questions = [ {tab: pregunta1Tab, content: pregunta1},
                    {tab: pregunta2Tab, content: pregunta2},
                  ]

//  ************************************ QUIZ *************************

function ischecked(input){
  return input.checked;
}

function buttonOn(questionInputs, button){
  if (questionInputs.some(ischecked)){
    button.disabled = false;
    button.style.opacity = "1";
  };
};




function updateQuestionTabs(preguntaTab, pregunta){
 if(localStorage.getItem(pregunta) === "true") {
  preguntaTab.classList.add('sidebar__content__read');
  preguntaTab.querySelector("i").classList.replace("fa-times-circle", "fa-check-circle") ;
  preguntaTab.querySelector("i").classList.replace("red","green") ;
  preguntaTab.querySelector(".sidebar__content__chevron").style.display = "none";
 } else if (localStorage.getItem(pregunta) === "false") {
  preguntaTab.classList.add('sidebar__content__read');
  preguntaTab.querySelector(".sidebar__content__chevron").style.display = "none";
  preguntaTab.querySelector("i").classList.replace("fa-check-circle", "fa-times-circle") ;
  preguntaTab.querySelector("i").classList.replace("green", "red") ;
 }
}


// function incorrectAnswers(respuestasIncorrectas){
//   respuestasIncorrectas.forEach((respuesta) => {
//     respuesta.style.color = "#CCCCCC";
//     respuesta.querySelector(".form__radio-button").style.display = "none";
//     if (respuesta.querySelector(".form__radio-input").checked) {
//         respuesta.querySelector(".form__orange1").classList.add("cross1");
//         respuesta.querySelector(".form__orange2").classList.add("cross2");
//     }else{
//       respuesta.querySelector(".form__orange1").style.display = "none";
//       respuesta.querySelector(".form__orange2").style.display = "none";
//       respuesta.querySelector("label").style.boxShadow = "none";
//     }
//   });
// }

function solution(respuestasIncorrectas, respuestaCorrecta){
  respuestaCorrecta.parentNode.querySelector(".form__orange1").classList.add("full-width");
  event.currentTarget.style.display = "none";
  incorrectAnswers(respuestasIncorrectas)
}


function checkSolution(respuestaCorrecta, questionInputs, respuestasIncorrectas, pregunta, testAnswerCorrect, testAnswerIncorrect){
  if (respuestaCorrecta.checked) {
    localStorage.setItem(pregunta, true );
    testAnswerCorrect.style.maxHeight= "150rem";
    solution(respuestasIncorrectas, respuestaCorrecta );
  } else if (questionInputs.some(ischecked)) {
    localStorage.setItem(pregunta, false );
    testAnswerIncorrect.style.maxHeight= "150rem";
    solution(respuestasIncorrectas, respuestaCorrecta);
  }
}

// question1.addEventListener("click", (event) => {
//   buttonOn(question1Inputs, button1);
// });

// question2.addEventListener("click", (event) => {
//   buttonOn(question2Inputs, button2);
// });


// question3.addEventListener("click", (event) => {
//   buttonOn(question3Inputs, button3);
// });


// question4.addEventListener("click", (event) => {
//   buttonOn(question4Inputs, button4);
// });


// button1.addEventListener("click", (event) => {
//   event.preventDefault();
//   checkSolution(respuestaCorrecta1, question1Inputs, respuestasIncorrectas1, "pregunta1" , testAnswerCorrect1, testAnswerInorrect1);
//   updateQuestionTabs(pregunta1Tab, "pregunta1");
// });

// button2.addEventListener("click", (event) => {
//   event.preventDefault();
//   checkSolution(respuestaCorrecta2, question2Inputs, respuestasIncorrectas2, "pregunta2" ,testAnswerCorrect2, testAnswerInorrect2);
//   updateQuestionTabs(pregunta2Tab, "pregunta2");
// });

// button3.addEventListener("click", (event) => {
//   event.preventDefault();
//   checkSolution(respuestaCorrecta3, question3Inputs, respuestasIncorrectas3, testAnswerCorrect3, testAnswerInorrect3);
// });


// button4.addEventListener("click", (event) => {
//   event.preventDefault();
//   checkSolution(respuestaCorrecta4, question4Inputs, respuestasIncorrectas4, testAnswerCorrect4, testAnswerInorrect4);
// });






// **********************************SIDEBAR****************************




// window.addEventListener('scroll', () => {
//   chapters.forEach((chapter) => {
//     if (chapter.content.offsetTop < (window.scrollY ) && (window.scrollY ) < (chapter.content.offsetTop + chapter.content.scrollHeight)) {
//       chapter.tab.classList.add('sidebar__content__current');
//       chapter.tab.classList.remove('sidebar__content__read');

//       } else if ((window.scrollY ) >= (chapter.content.offsetTop + chapter.content.scrollHeight)){
//         chapter.tab.classList.remove('sidebar__content__current');
//         chapter.tab.classList.add('sidebar__content__read');
//         // console.log(chapter.tab.classList + "is" + chapter.content.offsetTop  )
//       } else if (chapter.tab.classList.contains('sidebar__content__current') && (chapter.content.offsetTop > (window.scrollY )))  {
//         chapter.tab.classList.remove('sidebar__content__current');
//         // chapter.tab.classList.remove('sidebar__content__read');
//       }
//     });

// });


// window.addEventListener('scroll', () => {
//   questions.forEach((question) => {
//     if (question.content.offsetTop < (window.scrollY ) && (window.scrollY ) < (question.content.offsetTop + question.content.scrollHeight)) {
//       question.tab.classList.add('sidebar__content__current');
//       // question.tab.classList.remove('sidebar__content__read');

//       } else if ((window.scrollY ) >= (question.content.offsetTop + question.content.scrollHeight)){
//         question.tab.classList.remove('sidebar__content__current');
//         // question.tab.classList.add('sidebar__content__read');
//         // console.log(question.tab.classList + "is" + question.content.offsetTop  )
//       } else if (question.tab.classList.contains('sidebar__content__current') && (question.content.offsetTop > (window.scrollY )))  {
//         question.tab.classList.remove('sidebar__content__current');
//         // question.tab.classList.remove('sidebar__content__read');
//       }
//     });

// });

// **************************** LOCAL STORAGE*****************************



// window.addEventListener('scroll', () => {
//   localStorage.setItem("windowHeight", window.scrollY  );
// });

// window.addEventListener('load', () => {
//   window.scrollTo(0, localStorage.getItem('windowHeight'))
//   updateQuestionTabs(pregunta1Tab, "pregunta1");
//   updateQuestionTabs(pregunta2Tab, "pregunta2");
// });





  // ***************************PERCENTAGE*******************************
//  window.addEventListener('scroll', () => {
//   let percentage = ( window.scrollY)/((document.querySelector("#home").scrollHeight) - window.innerHeight );
//   document.querySelector(".sidebar__percentage__bar--2").style.width = `${percentage * 20.7}rem`
//   document.getElementById("%number").innerText = Math.round(percentage*100);
// });




 // *******************************  MENÚ CERRABLE ******************************

const contenidos = document.getElementById('contenidos-title');



//   contenidos.addEventListener("click", (event) => {
//     event.currentTarget.parentNode.classList.toggle("sidebar__content__invisible");
//     event.currentTarget.querySelector(".sidebar__content__chevron-down").classList.toggle("sidebar__content__chevron-up");

//   });


// const evaluacion = document.getElementById('evaluacion-title');

//   evaluacion.addEventListener("click", (event) => {
//     event.currentTarget.parentNode.classList.toggle("sidebar__content__invisible");
//     event.currentTarget.querySelector(".sidebar__content__chevron-down").classList.toggle("sidebar__content__chevron-up");

//   });






