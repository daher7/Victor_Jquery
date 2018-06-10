$(document).ready(function () {
    console.log("jQuery cargado");

    // 1- Mueve los elementos por la pagina
    $('.elemento').draggable();

    // 2- Redimensionar elementos.
    $('.elemento').resizable();

    // 3- Seleccionar elementos
    $('.lista').selectable();
});