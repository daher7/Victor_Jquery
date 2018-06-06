"use strict"

// Código en jQuery
$(document).ready(function(){
    $("contenido").append("con jQuery es más fácil");
    console.log("jQuery cargado...");
});

// Mismo código en Javascript
document.addEventListener("DOMContentLoaded", function(event){
    var elemento = document.getElementById("contenido2");
    var parrafo = document.createElement("p");

    var texto = document.createTextNode("con Javascript tardas más");

    parrafo.appendChild(texto);
    elemento.appendChild(parrafo);
});