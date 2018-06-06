$(document).ready(function () { // Para comprobar que se carga jQuery.

    console.log("eventos.js cargados");

    function cambiarColorFondoMarron() {
        $(this).css("background", "brown");
    }

    function cambiarColorFondoVioleta() {
        $(this).css("background", "blueviolet");
    }

    function cambiarBordeBlanco(){
        $(this).css("border", "2px dashed white").css("color", "white");
    }

    function cambiarColorFondoRosa(){
        $(this).css("background", "pink");
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

});