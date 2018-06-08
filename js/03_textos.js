$(document).ready(function () {
    "use strict"
    console.log("jQuery cargado"); // Comprobamos que jQuery se ha cargado correctamente.

    recargarEnlaces(); // Cargamos la función al cargar la pagina.

    $('#insertar_btn').click(recogerEnlace);
    $('#insertar_btn').removeAttr('disabled'); // Le hemos quitado al botón el atributo disabled


    function recogerEnlace() {
        var insertar = $('#insertar_enlace'); // Con val recogemos el valor del input.
        insertar.val(' '); // Dejamos la caja del input en blanco.
        console.log(insertar.val()); // Mostramos el valor por consola.

        $('#lista').append('<li><a href="' + insertar.val() + '"></a></li>');
        recargarEnlaces();
    }

    function recargarEnlaces() {
        // Vamos a recorrer todos los enlaces que hay
        $('a').each(function (index) { // Hay que pasarle un indice al each.

            var esto = $(this);
            var enlace = esto.attr("href");
            esto.attr('target', '_blank'); // Le podemos añadir atributos a los enlaces
            esto.text(enlace);
        });
    }

});