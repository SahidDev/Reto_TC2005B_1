var urlUsuario = "http://35.223.20.167:8131/api/usuario";
var urlProducto = "http://35.223.20.167:8131/api/producto";
var urlCategoria = "http://35.223.20.167:8131/api/categoria";

function postUsuario() {
    var myNombre = $('#usuario__Nombre').val();
    var myApellido = $('#usuario__Apellido').val();
    var myEmail = $('#usuario__Email').val();
    var myContrasenia = $('#usuario__Contrasenia').val();
    var myFechaDeNacimiento = $('#usuario__FechaNacimiento').val();
    var myTipoDeCuenta = $('#usuario__TipoCuenta').val();

    var myUsuario = {
        nombres: myNombre,
        apellidos: myApellido,
        correo: myEmail,
        contrasenia: myContrasenia,
        fecha_nacimiento: myFechaDeNacimiento,
        tipo_cuenta: myTipoDeCuenta,
    };

    console.log(myUsuario);

    $.ajax({
        url: urlUsuario,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $('#resultado__Usuario').html(JSON.stringify(data.user));
        },
        data: JSON.stringify(myUsuario)
    });
}

function getUsuario() {
    $.getJSON(urlUsuario,
        function(json) {
           console.log(json);
    
            var arrUsuarios = json.usuarios;
    
            var htmlTableUsers = '<table border=1">';
    
            arrUsuarios.forEach(function(item) {
               console.log(item);
               htmlTableUsers += '<tr>' +
                                        '<td>' + item.id + '</td>' +
                                        '<td>' + item.nombres + '</td>' +
                                        '<td>' + item.apellidos + '</td>' +
                                        '<td>' + item.correo + '</td>' +
                                        '<td>' + item.contrasenia + '</td>' +
                                        '<td>' + item.fecha_nacimiento + '</td>' +
                                        '<td>' + item.tipo_cuenta + '</td>' +
                                  '</tr>';
            });
    
            htmlTableUsers += '</table>';
    
           $('#resultado__Usuario').html(htmlTableUsers);
    
    
        }
      );
}
