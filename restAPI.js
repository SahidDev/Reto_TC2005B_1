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
            $('#resultado__Usuario').html(JSON.stringify(data.usuarios));
        },
        data: JSON.stringify(myUsuario)
    });
}

function postCategoria() {
    var myNombre = $('#categoria__Nombre').val();
    
    var myUsuario = {
        nombre: myNombre,
    };

    console.log(myUsuario);

    $.ajax({
        url: urlCategoria,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $('#resultado__Categoria').html(JSON.stringify(data.categoria));
        },
        data: JSON.stringify(myUsuario)
    });
}

function postProducto() {
    var myNombre = $('#producto__Nombre').val();
    var myDescripcion = $('#producto__Descripcion').val();
    var myPrecioMenudeo = $('#producto__PrecioMenudeo').val();
    var myPrecioMayoreo = $('#producto__PrecioMayoreo').val();
    var myCantidad = $('#producto__Cantidad').val();
    var myFechaDeProduccion = $('#producto__FechaProduccion').val();
    var myIDCategoria = $('#producto__IDCategoria').val();
    var myIDVendedor = $('#producto__IDVendedor').val();


    var myProducto = {
        nombre: myNombre,
        descripcion: myDescripcion,
        precio_menudeo: myPrecioMenudeo,
        precio_mayoreo: myPrecioMayoreo,
        cantidad: myCantidad,
        fecha_prod: myFechaDeProduccion,
        categoriaId: myIDCategoria,
        vendedorId: myIDVendedor,
    };

    console.log(myProducto);

    $.ajax({
        url: urlProducto,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $('#resultado__Producto').html(JSON.stringify(data.productos));
        },
        data: JSON.stringify(myProducto)
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

function getCategoria() {
    $.getJSON(urlCategoria,
        function(json) {
           console.log(json);
    
            var varCategorias = json.categorias;
    
            var htmlTableUsers = '<table border=1">';
    
            varCategorias.forEach(function(item) {
               console.log(item);
               htmlTableUsers += '<tr>' +
                                        '<td>' + item.id + '</td>' +
                                        '<td>' + item.nombre + '</td>' +
                                  '</tr>';
            });
    
            htmlTableUsers += '</table>';
    
           $('#resultado__Categoria').html(htmlTableUsers);
    
    
        }
      );
}

function getProducto() {
    $.getJSON(urlProducto  ,
        function(json) {
           console.log(json);
    
            var arrProductos = json.productos;
    
            var htmlTableUsers = '<table border=1">';
    
            arrProductos.forEach(function(item) {
               console.log(item);
               htmlTableUsers += '<tr>' +
                                        '<td>' + item.id + '</td>' +
                                        '<td>' + item.nombre + '</td>' +
                                        '<td>' + item.descripcion + '</td>' +
                                        '<td>' + item.precio_menudeo + '</td>' +
                                        '<td>' + item.precio_mayoreo + '</td>' +
                                        '<td>' + item.cantidad + '</td>' +
                                        '<td>' + item.fecha_prod + '</td>' +
                                        '<td>' + item.categoriaId + '</td>' +
                                  '</tr>';
            });
    
            htmlTableUsers += '</table>';
    
           $('#resultado__Producto').html(htmlTableUsers);
    
    
        }
      );
}
