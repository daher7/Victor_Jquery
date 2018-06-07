$(document).ready(function () { // Para comprobar que se carga jQuery.

    console.log("eventos.js cargados");

    function cambiarColorFondoMarron() {
        $(this).css("background", "brown");
    }

    function cambiarColorFondoVioleta() {
        $(this).css("background", "blueviolet");
    }

    function cambiarBordeBlanco() {
        $(this).css("border", "2px dashed white").css("color", "white");
    }

    function cambiarColorFondoRosa() {
        $(this).css("background", "pink");
    }

    function cambiarBordeAmarillo() {
        $(this).css("border", "4px solid yellow");
        console.log("Borde Amarillo");
    }

    function moverBola() {
        var sigueme = $("#sigueme");
        console.log("X: " + event.clientX, "Y: " + event.clientY);
        $('body').css("cursor", "none");
        sigueme.css("left", event.clientX).css("top", event.clientY);
    }



    var caja = $('#caja');

    // Eventos MouseOver y MouseOut:
    /*
    caja.mouseover(cambiarColorFondoMarron);
    caja.mouseout(cambiarColorFondoVioleta);
    */

    // Evento Hover:
    caja.hover(cambiarColorFondoMarron, cambiarColorFondoVioleta);

    // Eventos Click y Doble Click
    caja.click(cambiarBordeBlanco);

    caja.dblclick(cambiarColorFondoRosa);

    // Focus y Blur
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function () {
        $(this).css("border", "5px solid green");
    });

    nombre.blur(function () {
        $(this).css("border", "5px dashed blue");
        datos.text($(this).val()); // Para recoger el texto del input y meterlo en el div
        datos.css("display", "block");
    });

    // Mousedown y Mouseup

    datos.mousedown(cambiarBordeAmarillo); // Pulsas el boton del raton.

    datos.mouseup(cambiarColorFondoRosa); // Sueltas el boton del raton.

    // Mousemove. 

    $(document).mousemove(moverBola);

});