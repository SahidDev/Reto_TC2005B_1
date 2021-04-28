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

    var name = document.getElementById("usuario__Nombre");
    var surname = document.getElementById("usuario__Apellido");
    var email = document.getElementById("usuario__Email");
    var pass = document.getElementById("usuario__Contrasenia");
    var birth = document.getElementById("usuario__FechaNacimiento");

    if (myNombre === "") {
        console.log('object');
        name.classList.add("invalid");
    } else {
        console.log('valid');
        name.classList.remove("invalid");
    }

    if (myApellido === "") {
        surname.classList.add("invalid");
    } else {
        surname.classList.remove("invalid");
    }

    if (myEmail === "") {
        email.classList.add("invalid");
    } else {
        email.classList.remove("invalid");
    }

    if (myContrasenia === "") {
        pass.classList.add("invalid");
    } else {
        pass.classList.remove("invalid");
    }

    if (myFechaDeNacimiento === "") {
        birth.classList.add("invalid");
    } else {
        birth.classList.remove("invalid");
    }


    if (myNombre === "" || myApellido === "" || myEmail === "" || myContrasenia == "" || myFechaDeNacimiento === "") {
        return;
    } else {
        name.value = '';
        surname.value = '';
        email.value = '';
        pass.value = '';
        birth.value = '';
    }

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
        success: function(data) {
            console.log(data);
            $('#resultado__Usuario').html(JSON.stringify(data.usuarios));
        },
        data: JSON.stringify(myUsuario)
    });
}

function postCategoria() {
    var myNombre = $('#categoria__Nombre').val();

    if (myNombre === "") {
        var input = document.getElementById("categoria__Nombre");
        input.classList.add("invalid");
        return;
    } else {
        var input = document.getElementById("categoria__Nombre");
        input.classList.remove("invalid");
        input.value = '';
    }

    var myUsuario = {
        nombre: myNombre,
    };

    console.log(myUsuario);

    $.ajax({
        url: urlCategoria,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
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

    var name = document.getElementById("producto__Nombre");
    var desc = document.getElementById("producto__Descripcion");
    var pricemen = document.getElementById("producto__PrecioMenudeo");
    var pricemay = document.getElementById("producto__PrecioMayoreo");
    var stock = document.getElementById("producto__Cantidad");
    var prod = document.getElementById("producto__FechaProduccion");
    var cat = document.getElementById("producto__IDCategoria");
    var sell = document.getElementById("producto__IDVendedor");

    if (myNombre === "") {
        name.classList.add("invalid");
    } else {
        name.classList.remove("invalid");
    }

    if (myDescripcion === "") {
        desc.classList.add("invalid");
    } else {
        desc.classList.remove("invalid");
    }

    if (myPrecioMenudeo === "") {
        pricemen.classList.add("invalid");
    } else {
        pricemen.classList.remove("invalid");
    }

    if (myPrecioMayoreo === "") {
        pricemay.classList.add("invalid");
    } else {
        pricemay.classList.remove("invalid");
    }

    if (myCantidad === "") {
        stock.classList.add("invalid");
    } else {
        stock.classList.remove("invalid");
    }

    if (myFechaDeProduccion === "") {
        prod.classList.add("invalid");
    } else {
        prod.classList.remove("invalid");
    }

    if (myIDCategoria === "") {
        cat.classList.add("invalid");
    } else {
        cat.classList.remove("invalid");
    }

    if (myIDVendedor === "") {
        sell.classList.add("invalid");
    } else {
        sell.classList.remove("invalid");
    }


    if (myNombre === "" || myDescripcion === "" || myPrecioMenudeo === "" || myPrecioMayoreo === "" || myCantidad == "" || myFechaDeProduccion === "" || myIDCategoria == "" || myIDVendedor == "") {
        return;
    } else {
        name.value = '';
        desc.value = '';
        pricemen.value = '';
        pricemay.value = '';
        stock.value = '';
        prod.value = '';
        cat.value = '';
        sell.value = '';
    }

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
        success: function(data) {
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

            var htmlTableUsers = '<table class="table">' +
                '<thead>' +
                '<tr>' +
                '<th scope="col">ID</th>' +
                '<th scope="col">Nombre(s)</th>' +
                '<th scope="col">Apellido(s)</th>' +
                '<th scope="col">Correo</th>' +
                '<th scope="col">Contraseña</th>' +
                '<th scope="col">Fecha de nacimiento</th>' +
                '<th scope="col">Tipo de cuenta</th>' +

                '</tr>' +
                '</thead>' +
                '<tbody>';

            arrUsuarios.forEach(function(item) {
                console.log(item);
                htmlTableUsers += '<tr>' +
                    '<td>' + item.id + '</td>' +
                    '<td>' + item.nombres + '</td>' +
                    '<td>' + item.apellidos + '</td>' +
                    '<td>' + item.correo + '</td>' +
                    '<td class="password">' + item.contrasenia + '</td>' +
                    '<td>' + item.fecha_nacimiento + '</td>' +
                    '<td>' + item.tipo_cuenta + '</td>' +
                    '</tr>';
            });

            htmlTableUsers += '</tbody>' + '</table>';

            $('#resultado__Usuario').html(htmlTableUsers);


        }
    );
}

function getCategoria() {
    $.getJSON(urlCategoria,
        function(json) {
            console.log(json);

            var varCategorias = json.categorias;

            var htmlTableUsers = '<table class="table">' +
                '<thead>' +
                '<tr>' +
                '<th scope="col">ID</th>' +
                '<th scope="col">Nombre(s)</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody>';

            varCategorias.forEach(function(item) {
                console.log(item);
                htmlTableUsers += '<tr>' +
                    '<td>' + item.id + '</td>' +
                    '<td>' + item.nombre + '</td>' +
                    '</tr>';
            });

            htmlTableUsers += '</tbody>' + '</table>';

            $('#resultado__Categoria').html(htmlTableUsers);


        }
    );
}

function getProducto() {
    $.getJSON(urlProducto,
        function(json) {
            console.log(json);

            var arrProductos = json.productos;

            var htmlTableUsers = '<table class="table">' +
                '<thead>' +
                '<tr>' +
                '<th scope="col">ID</th>' +
                '<th scope="col">Nombre</th>' +
                '<th scope="col">Descripción</th>' +
                '<th scope="col">Precio menudeo</th>' +
                '<th scope="col">Precio mayoreo</th>' +
                '<th scope="col">Stock</th>' +
                '<th scope="col">Fecha de producción</th>' +
                '<th scope="col">Categoría</th>' +
                '<th scope="col">ID del vendedor</th>' +

                '</tr>' +
                '</thead>' +
                '<tbody>';

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
                    '<td>' + item.vendedorId + '</td>' +
                    '</tr>';
            });

            htmlTableUsers += '</tbody>' + '</table>';

            $('#resultado__Producto').html(htmlTableUsers);

        }
    );
}