$(document).ready(function () {
    "use strict"
    // Comprobamos que jQuery se ha cargado.
    console.log("jQuery cargado");

    // 1- Load:
    //$('#datos').load('https://reqres.in'); // Cargamos toda la pagina en el div datos

    // 2 Get:
    $.get('https://reqres.in/api/users', { // Esta es la url 
        page: 3 // Este es el termino que le pasamos.
    }, function (response) {
        console.log(response);
        for (let indice in response.data) {
            // Recorremos el array y vamos pintando los datos que nos devuelve en el div datos.
            $('#datos').append('<p>' + response.data[indice].first_name + ' ' + response.data[indice].last_name + '</p>')
        }
    });

    // 3- Post
    /*
    $('#formulario').submit(function () { // Cuando pulsemos el boton del formulario se añadira un nuevo usuario.

        var usuario = {
            name: $('input[name="nombre"]').val(),
            job: $('input[name="trabajo"]').val()
        }
        console.log(usuario); // Datos enviados.

        $.post('https://reqres.in/api/users', usuario, function (response) {
            console.log(response); // Para mostrar que la petición ha sido correcta y se ha creado el nuevo ususario.
        }).done(function () {
            alert("Usuario añadido correctamente"); // Cuando se añade el usuario salta una alerta.
        });
        return false; // Para que no nos redirija a otra página.
    });
    */

    // 4- Ajax

    $.ajax('https://reqres.in/api/users', {
        type: 'get',
        datatype: 'json',
        success: mostrarExito,
        error: mostrarError
    })

    function mostrarExito(response, status) {
        //console.log(data); // Muestra los datos
        /*for (let i in data.data) {
            console.log(data.data[i]);
        }*/
        console.log(status);
        for (let i in response.data) {
            console.log(response.data[i]);
        }
        for (let i in response.data) {
            console.log(i + "-" + response.data[i].first_name);
        }
        $.each(response.data, function (i, v) {
            console.log(i + "-" + v.first_name);
        });
    }

    function mostrarError() {
        console.log("Ha ocurrido un error");
    }
});