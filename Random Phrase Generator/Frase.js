'use strict' 

// Se declaran los arreglos de las frases para combinar dividados en adjetivos, frases principales y frases complementarias
const adj = ["campeón", "precioso", "bebé", "mi chingón", "cariño", "tesoro",
"gordo"];

const primph = ["Lo estás haciendo bien", "Eres fantástico", "Hoy tuviste una victoria", "Te ves bien", "Eres muy inteligente", "Estoy orgulloso de ti"];

const secph = ["no te rindas", "sigue así", "tu puedes con esto", "Vamos, chingao!", "el mundo es tuyo", "te irá bien"];


// Se definen las variables de longitud para seleccionar un elemento N del array
const longA = adj.length;
const longB = primph.length;
const longC = secph.length;


// Se crea la función que se encargará de combinar las palabras
function RandomPhrase(){
    var first = Math.floor(Math.random(0,5)*(longA));
    var second = Math.floor(Math.random(0,5)*(longB));
    var third = Math.floor(Math.random(0,5)*(longC));

    //Se selecciona el parrafo donde se incrustarâ la frase
    var phrase = ("¡Hola " + adj[first] + "! " + primph[second] + ", " + secph[third]);
    let p = document.querySelector("#frase");
    p.innerHTML = phrase;

}

// Se crea funcion para separar la palabra, se invierte, se vuelve a juntar 
function ReverseWord(){
    var word = document.getElementById("word").value;
    const rw = word.split("").reverse().join('');
    const reversedWord = ("Tu palabra revertida es: " + rw);
    let p = document.querySelector("#reversed");
    p.innerHTML = reversedWord;
}

