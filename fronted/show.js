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
                        <td>${element.birthdate}</td>
                        <td>${element.adress}</td>
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

});