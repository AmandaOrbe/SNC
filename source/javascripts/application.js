//= require jquery
//= require bootstrap
//= require_tree .

// CARD TOGGLE

const cards = document.querySelectorAll('.card')

cards.forEach(function(card){

  card.addEventListener("click", function(event){
    event.currentTarget.classList.toggle("card__visible");
    event.currentTarget.querySelector("i").classList.toggle("fa-plus");
    event.currentTarget.querySelector("i").classList.toggle("fa-minus");

  });

});



// **********************************CONSTANS****************************

const radioInputs = document.querySelectorAll('.form__radio-input');


const respuestaCorrecta1 = document.getElementById("Codelección1p/19qymutacióndeIDH");
const button1 = document.getElementById("pregunta1__button");
const question1 = document.getElementById("pregunta1");
const respuestasIncorrectas1 = [document.querySelectorAll('.form__group')[0], document.querySelectorAll('.form__group')[1], document.querySelectorAll('.form__group')[3]];
const question1Inputs = [radioInputs[0], radioInputs[1], radioInputs[2], radioInputs[3]];
const testAnswerCorrect1 = document.querySelector(".test__answer__correct");
const testAnswerIncorrect1 = document.querySelector(".test__answer__incorrect");

const respuestaCorrecta2 = document.getElementById("Procarbacina,lomustinayvincristina")
const button2 = document.getElementById("pregunta2__button")
const question2 = document.getElementById("pregunta2");
const respuestasIncorrectas2 = [document.querySelectorAll('.form__group')[4], document.querySelectorAll('.form__group')[5], document.querySelectorAll('.form__group')[7]];
const question2Inputs = [radioInputs[4], radioInputs[5], radioInputs[6], radioInputs[7]];
const testAnswerCorrect2 = document.querySelector(".test__answer__correct2");
const testAnswerIncorrect2 = document.querySelector(".test__answer__incorrect2");



const respuestaCorrecta3 = document.getElementById("Observaciónytratamientoalarecaída")
const button3 = document.getElementById("pregunta3__button")
const question3 = document.getElementById("pregunta3");
const respuestasIncorrectas3 = [document.querySelectorAll('.form__group')[9], document.querySelectorAll('.form__group')[10]];
const question3Inputs = [radioInputs[8], radioInputs[9], radioInputs[10]];
const testAnswerCorrect3 = document.querySelector(".test__answer__correct3");
const testAnswerIncorrect3 = document.querySelector(".test__answer__incorrect3");


const respuestaCorrecta4 = document.getElementById("Radioterapia50.4–54GyseguidodePCVx6ciclos")
const button4 = document.getElementById("pregunta4__button")
const question4 = document.getElementById("pregunta4");
const respuestasIncorrectas4 = [document.querySelectorAll('.form__group')[11], document.querySelectorAll('.form__group')[12]];
const question4Inputs = [radioInputs[11], radioInputs[12], radioInputs[13]];
const testAnswerCorrect4 = document.querySelector(".test__answer__correct4");
const testAnswerIncorrect4 = document.querySelector(".test__answer__incorrect4");


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

const biblioTab = document.getElementById("side_bibliografia");
const biblio = document.getElementById("bibliografia");

const pregunta1Tab = document.getElementById("side_pregunta1");
const pregunta1 = document.getElementById("pregunta1");

const pregunta2Tab = document.getElementById("side_pregunta2");
const pregunta2 = document.getElementById("pregunta2");

const pregunta3Tab = document.getElementById("side_pregunta3");
const pregunta3 = document.getElementById("pregunta3");

const pregunta4Tab = document.getElementById("side_pregunta4");
const pregunta4 = document.getElementById("pregunta4");



const chapters = [{tab: presentacionTab, content: presentacion} ,
                  {tab: objetivosTab, content: objetivos} ,
                  {tab: epidemiologiaTab, content: epidemiologia},
                  {tab: diagnosticoTab, content: diagnostico},
                  {tab: tratamientoTab, content: tratamiento},
                  {tab: inicioTab, content: inicio},
                  {tab: tendenciasTab, content: tendencias},
                  {tab: tendenciasTab, content: tendencias},
                  {tab: biblioTab, content: biblio},
                ]

const questions = [ {tab: pregunta1Tab, content: pregunta1},
                    {tab: pregunta2Tab, content: pregunta2},
                    {tab: pregunta3Tab, content: pregunta3},
                    {tab: pregunta4Tab, content: pregunta4},
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


function incorrectAnswers(respuestasIncorrectas){
  respuestasIncorrectas.forEach(function(respuesta){
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

question1.addEventListener("click", function(event){
  buttonOn(question1Inputs, button1);
});

question2.addEventListener("click", function(event){
  buttonOn(question2Inputs, button2);
});


question3.addEventListener("click", function(event){
  buttonOn(question3Inputs, button3);
});


question4.addEventListener("click", function(event){
  buttonOn(question4Inputs, button4);
});





button1.addEventListener("click", function(event){
  event.preventDefault();
  checkSolution(respuestaCorrecta1, question1Inputs, respuestasIncorrectas1, "pregunta1" , testAnswerCorrect1, testAnswerIncorrect1);
  updateQuestionTabs(pregunta1Tab, "pregunta1");
});

button2.addEventListener("click", function(event){
  event.preventDefault();

  checkSolution(respuestaCorrecta2, question2Inputs, respuestasIncorrectas2, "pregunta2" ,testAnswerCorrect2, testAnswerIncorrect2);


  updateQuestionTabs(pregunta2Tab, "pregunta2");
});

button3.addEventListener("click", function(event){
  event.preventDefault();
  checkSolution(respuestaCorrecta3, question3Inputs, respuestasIncorrectas3, "pregunta3" , testAnswerCorrect3, testAnswerIncorrect3);
  updateQuestionTabs(pregunta3Tab, "pregunta3");
});


button4.addEventListener("click", function(event){
  event.preventDefault();
  checkSolution(respuestaCorrecta4, question4Inputs, respuestasIncorrectas4, "pregunta4" , testAnswerCorrect4, testAnswerIncorrect4);
  updateQuestionTabs(pregunta4Tab, "pregunta4");
});






// // **********************************SIDEBAR****************************




window.addEventListener('scroll', function(){
  chapters.forEach(function(chapter){
    if (chapter.content.offsetTop < (window.scrollY ) && (window.scrollY ) < (chapter.content.offsetTop + chapter.content.scrollHeight)) {
      chapter.tab.classList.add('sidebar__content__current');
      chapter.tab.classList.remove('sidebar__content__read');

      } else if ((window.scrollY ) >= (chapter.content.offsetTop + chapter.content.scrollHeight)){
        chapter.tab.classList.remove('sidebar__content__current');
        chapter.tab.classList.add('sidebar__content__read');
        // console.log(chapter.tab.classList + "is" + chapter.content.offsetTop  )
      } else if (chapter.tab.classList.contains('sidebar__content__current') && (chapter.content.offsetTop > (window.scrollY )))  {
        chapter.tab.classList.remove('sidebar__content__current');
        // chapter.tab.classList.remove('sidebar__content__read');
      }
    });

});


window.addEventListener('scroll', function(){
  questions.forEach(function(question) {
    if (question.content.offsetTop < (window.scrollY ) && (window.scrollY ) < (question.content.offsetTop + question.content.scrollHeight)) {
      question.tab.classList.add('sidebar__content__current');
      // question.tab.classList.remove('sidebar__content__read');

      } else if ((window.scrollY ) >= (question.content.offsetTop + question.content.scrollHeight)){
        question.tab.classList.remove('sidebar__content__current');
        // question.tab.classList.add('sidebar__content__read');
        // console.log(question.tab.classList + "is" + question.content.offsetTop  )
      } else if (question.tab.classList.contains('sidebar__content__current') && (question.content.offsetTop > (window.scrollY )))  {
       console.log(question.tab);
        question.tab.classList.remove('sidebar__content__current');
        // question.tab.classList.remove('sidebar__content__read');
      }
    });

});

// // **************************** LOCAL STORAGE*****************************



window.addEventListener('scroll', function(){
  localStorage.setItem("windowHeight", window.scrollY  );
});

window.addEventListener('load', function(){
  window.scrollTo(0, localStorage.getItem('windowHeight'))
  updateQuestionTabs(pregunta1Tab, "pregunta1");
  updateQuestionTabs(pregunta2Tab, "pregunta2");
  updateQuestionTabs(pregunta3Tab, "pregunta3");
  updateQuestionTabs(pregunta4Tab, "pregunta4");
});





//   // ***************************PERCENTAGE*******************************
 window.addEventListener('scroll', function(){
  var percentage = ( window.scrollY)/((document.querySelector("#home").scrollHeight) - window.innerHeight );
  document.querySelector(".sidebar__percentage__bar--2").style.width = percentage * 20.7+"rem"
  document.getElementById("%number").innerText = Math.round(percentage*100) + "%  completado";
});




//  // *******************************  MENÚ CERRABLE ******************************

const contenidos = document.getElementById('contenidos-title');



  contenidos.addEventListener("click", function(event){
    event.currentTarget.parentNode.classList.toggle("sidebar__content__invisible");
    event.currentTarget.querySelector(".sidebar__content__chevron-down").classList.toggle("sidebar__content__chevron-up");

  });


const evaluacion = document.getElementById('evaluacion-title');

  evaluacion.addEventListener("click", function(event){
    event.currentTarget.parentNode.classList.toggle("sidebar__content__invisible");
    event.currentTarget.querySelector("sidebar__content__chevron-up").classList.toggle(".sidebar__content__chevron-down");

  });





// ************************************ PHONE MENU ****************************


const phoneButton = document.querySelector(".navigation__button");
const sidebarItems = document.querySelectorAll(".sidebar__content__chapter");

function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("hidden-phone");
  document.getElementById("main").classList.toggle("hidden-phone");
  document.getElementById("main").classList.toggle("hidden-phone-main");
  document.querySelector(".navigation__icon--1").classList.toggle("navigation__icon--1x");
  document.querySelector(".navigation__icon--3").classList.toggle("navigation__icon--3x");
  document.querySelector(".navigation__icon--2").classList.toggle("navigation__icon--2x");
  document.querySelector(".navigation__background").classList.toggle("navigation__background--small");

}

phoneButton.addEventListener("click", function(event){
  toggleSidebar();
});


sidebarItems.forEach(function(item){
  item.addEventListener("click", function(event){
    toggleSidebar();
  });
});

document.getElementById("side_bibliografia").addEventListener("click", function(event){
  toggleSidebar();
});




