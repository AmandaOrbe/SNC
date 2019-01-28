//= require jquery
//= require bootstrap
//= require_tree .

// CARD TOGGLE

const cards = document.querySelectorAll('.card')

cards.forEach((card) => {

  card.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("card__visible");
    event.currentTarget.querySelector("i").classList.toggle("fa-plus");
    event.currentTarget.querySelector("i").classList.toggle("fa-minus");

  });

});

// **********************************QUIZ****************************

const respuesta1 = document.getElementById("Codelección1p/19qymutacióndeIDH");
const button1 = document.getElementById("pregunta1__button");
const question1 = document.getElementById("pregunta1");
const respuestas = [document.querySelectorAll('.form__group')[0], document.querySelectorAll('.form__group')[1], document.querySelectorAll('.form__group')[3]];
const radio_inputs = document.querySelectorAll('.form__radio-input');
const question1_inputs = [radio_inputs[0], radio_inputs[1], radio_inputs[2], radio_inputs[3]];


const respuesta2 = document.getElementById("Procarbacina,lomustinayvincristina")
const button2 = document.getElementById("pregunta2__button")
const question2 = document.getElementById("pregunta2");
const respuestas2 = [document.querySelectorAll('.form__group')[4], document.querySelectorAll('.form__group')[5], document.querySelectorAll('.form__group')[7]];
const question2_inputs = [radio_inputs[4], radio_inputs[5], radio_inputs[6], radio_inputs[7]];



function ischecked(input){
  return input.checked;
}

function buttonOn(questionInputs, button){
  if (questionInputs.some(ischecked)){
    button.disabled = false;
    button.style.opacity = "1";
  };
};


question1.addEventListener("click", (event) => {
  buttonOn(question1_inputs, button1);
});

question2.addEventListener("click", (event) => {
  buttonOn(question2_inputs, button2);
});




function incorrect(respuestas, respuesta_correcta){
  respuesta_correcta.parentNode.querySelector(".form__orange1").classList.add("full-width");
  event.currentTarget.style.display = "none";
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



button1.addEventListener("click", (event) => {
  event.preventDefault()
  if (respuesta1.checked) {
    document.querySelector(".test__answer__correct").style.maxHeight= "150rem";
    incorrect(respuestas, respuesta1);
  } else if (question1_inputs.some(ischecked)) {
    document.querySelector(".test__answer__incorrect").style.maxHeight= "150rem";
    incorrect(respuestas, respuesta1);
  }
});






button2.addEventListener("click", (event) => {
  event.preventDefault();
  if (respuesta2.checked) {
    document.querySelector(".test__answer__correct2").style.maxHeight= "150rem";
    incorrect(respuestas2, respuesta2);
  } else if (question2_inputs.some(ischecked)){
    document.querySelector(".test__answer__incorrect2").style.maxHeight= "150rem";
      incorrect(respuestas2, respuesta2);
    }
    });

// **********************************SIDEBAR****************************

const presentacionTab = document.getElementById("side_Presentación");
const presentacion = document.getElementById("presentacion");

const objetivosTab = document.getElementById("side_Objetivos");
const objetivos = document.getElementById("objetivos");

const epidemiologiaTab = document.getElementById("side_1.Epidemiologíaydiagnóstico");
const epidemiologia = document.getElementById("epidemiologia");

const diagnosticoTab = document.getElementById("side_2.Diagnósticopatológicoymolecular");
const diagnostico = document.getElementById("diagnostico");

const tratamientoTab = document.getElementById("side_3.Tratamientopostquirúrgicoadyuvante");
const tratamiento = document.getElementById("tratamiento");

const inicioTab = document.getElementById("side_4.Tratamientodelaenfermedadnoresecabledeinicio");
const inicio = document.getElementById("inicio");

const tendenciasTab = document.getElementById("side_5.Tratamientoalarecaída:tendenciasactuales");
const tendencias = document.getElementById("tendencias");

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
                  {tab: pregunta1Tab, content: pregunta1},
                  {tab: pregunta2Tab, content: pregunta2},

                ]


  window.addEventListener('scroll', () => {
    chapters.forEach((chapter) => {
      if (chapter.content.offsetTop < (window.scrollY ) && (window.scrollY ) < (chapter.content.offsetTop + chapter.content.scrollHeight)) {
        chapter.tab.classList.add('sidebar__content__current');
        chapter.tab.classList.remove('sidebar__content__read');
        // console.log(chapter)
        // console.log( "chapter.content.offsetTop is" + chapter.content.offsetTop + "< a window.scrollY " + (window.scrollY )  + " y window.scrollY < (chapter.content.offsetTop + chapter.content.scrollHeight)" + (chapter.content.offsetTop + chapter.content.scrollHeight));

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



  // ***************************PERCENTAGE*******************************
 window.addEventListener('scroll', () => {
  let percentage = ( window.scrollY)/((document.querySelector("#home").scrollHeight) - window.innerHeight );
  document.querySelector(".sidebar__percentage__bar--2").style.width = `${percentage * 20.7}rem`
  document.getElementById("%number").innerText = Math.round(percentage*100);
});




 // *******************************  MENÚ CERRABLE ******************************

const contenidos = document.getElementById('contenidos-title');



  contenidos.addEventListener("click", (event) => {
    event.currentTarget.parentNode.classList.toggle("sidebar__content__invisible");
    event.currentTarget.querySelector(".sidebar__content__chevron-down").classList.toggle("sidebar__content__chevron-up");

    // event.currentTarget.querySelector("i").classList.toggle("fa-plus");
    // event.currentTarget.querySelector("i").classList.toggle("fa-minus");

  });


const evaluacion = document.getElementById('evaluacion-title');

  evaluacion.addEventListener("click", (event) => {
    event.currentTarget.parentNode.classList.toggle("sidebar__content__invisible");
    event.currentTarget.querySelector(".sidebar__content__chevron-down").classList.toggle("sidebar__content__chevron-up");
    // event.currentTarget.querySelector("i").classList.toggle("fa-plus");
    // event.currentTarget.querySelector("i").classList.toggle("fa-minus");

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

// console.log("presentacion va de " + presentacion.offsetTop + "a" + (presentacion.offsetTop + presentacion.scrollHeight) )
// console.log("objetivos va de " + objetivos.offsetTop + "a" + (objetivos.offsetTop + objetivos.scrollHeight) + "objetivos mide " + objetivos.scrollHeight)
// console.log("epidemiologia va de " + epidemiologia.offsetTop + "a" + (epidemiologia.offsetTop + epidemiologia.scrollHeight) )
// console.log("diagnostico va de " + diagnostico.offsetTop + "a" + (diagnostico.offsetTop + diagnostico.scrollHeight) )

// console.log(presentacion.offsetTop + "<" + (window.scrollY +500)  + "<" + (presentacion.offsetTop + presentacion.scrollHeight));
// console.log((window.scrollY +500) );
// console.log(presentacion.offsetTop + presentacion.scrollHeight);



