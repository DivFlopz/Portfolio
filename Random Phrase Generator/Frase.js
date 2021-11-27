'use strict' 

// Se declaran los arreglos de las frases para combinar dividados en adjetivos, frases principales y frases complementarias
const adj = ["campeon", "precioso", "bebe", "mi chingon", "carino", "tesoro",
"gordo"];

const primph = ["Lo estas haciendo bien", "Eres fantastico", "Hoy tuviste una victoria", "Te ves bien", "Eres muy inteligente", "Estoy orgulloso de ti"];

const secph = ["no te rindas", "sigue asi", "tu puedes con esto", "Vamos, chingao!", "el mundo es tuyo", "te ira bien"];


// Se definen las variables de longitud para seleccionar un elemento N del array
var longA = adj.length;
var longB = primph.length;
var longC = secph.length;

// Se crea la función que se encargará de combinar las palabras
function RandomPhrase(){
    var first = Math.round(Math.random(0,5)*(longA));
    var second = Math.round(Math.random(0,5)*(longB));
    var third = Math.round(Math.random(0,5)*(longC));

    //Se selecciona el parrafo donde se incrustarâ la frase
    var phrase = ("Hola " + adj[first] + "! " + primph[second] + ", " + secph[third]);
    var p = document.querySelector("#frase");
    p.innerHTML = phrase;

}