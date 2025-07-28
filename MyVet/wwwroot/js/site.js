// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//<script src="~/lib/jquery/dist/jquery.min.js"></script>

var listaBooks = [];

function obtenerLibros() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: '/Book/getAllBooks',
            method: 'GET',
            dataType: "json",
            success: function (data) {
                if (data.isSuccess)
                {
                    listaBooks = data.result;
                    resolve(listaBooks);
                } else {
                    reject(data.message);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                reject(textStatus);
            }
        });
    });
}


function hola() {
    window.alert("hola que hace");
    console.log("mensaje");
}