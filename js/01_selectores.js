"use strict"

$(document).ready(function () {

    /**
     * Los ID se utilizan para un solo elemento del html.
     * Las clases se usan para varios elementos del html.
     */

    // 1- Selectores de ID:

    $("#rojo").css("background", "red").css("color", "white");
    $("#amarillo").css("background", "yellow").css("color", "#0000FF");
    $("#verde").css("background", "green").css("color", "yellow");

    // 2- Selectores de clase:

    var zebra = $(".zebra");
    console.log(zebra); // Mi clase es un array.

    $(".sinBorde").click(pintarBorde); // Le asignamos una función al realizar un evento.

    function pintarBorde() {
        $(this).addClass("zebra"); // El this hace referencia a la clase
        console.log("Has hecho Click!!");
    }

    // 3- Selectores de etiquetas:

    var parrafo = $("p").css('cursor', 'pointer'); // Seleccionamos todos los párrafos.
    parrafo.click(cambiarClaseGrande);

    function cambiarClaseGrande() {
        var esto = $(this); // Para que no acceda al DOM continuamente.
        if (!esto.hasClass("grande")) {
            esto.addClass("grande");
        } else {
            esto.removeClass("grande");
        }
    }

    // 4- Selectores de Atributos:
    $('[title="google"]').css('background', '#ccc');
    $('[title="facebook"]').css('background', 'cornflowerblue');

    // 5- Otros:
    $('p,a').addClass("margenSuperior");

    var busqueda = $('#caja').find('.resaltado'); // Para buscar algo concreto en un "árbol"
    console.log(busqueda);

});