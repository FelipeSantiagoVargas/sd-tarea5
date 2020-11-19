$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:3000/show-users',
        type: "GET",
        success: function (res) {

            res.forEach(element => {
                $("#info-person tbody").append(
                    `
                    <tr>
                        <td>${element.name}</td>
                        <td>${element.last_name}</td>
                        <td>${element.phone}</td>
                    </tr>
                    `
                )
            });
        },
        error: function () {
            console.error("No es posible completar la operación");
        }
    });

    $('#send').click(() => {

        let persona = {
            name: $('#registry input[name=name]').val(),
            last_name: $('#registry input[name=last_name]').val(),
            birthdate: $('#registry input[name=birthdate]').val(),
            adress: $('#registry input[name=adress]').val(),
            phone: $('#registry input[name=phone]').val(),
        }

        $.ajax({
            url: 'http://localhost:3000/create-user',
            type: 'POST',
            data: persona,
            success: function (res) {
                alert("Usuario " + res.name + " Agregado Con Exito!!!")

                $("#info-person tbody").append(
                    `
                    <tr>
                        <td>${res.name}</td>
                        <td>${res.last_name}</td>
                        <td>${res.phone}</td>
                    </tr>
                    `
                )

            },
            error: function () {
                console.error("No es posible completar la operación");
            }
        });
    });

});