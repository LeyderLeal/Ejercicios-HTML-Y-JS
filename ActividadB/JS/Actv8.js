const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");


form.addEventListener("submit", e=>{
    e.preventDefault();
    
    var campos = {
        nombre:false,
        email:false,
        pass:false
    };

    var warnings = "";
    var entrar = false;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = "";
    if(nombre.value.length <2){
        warnings += 'El nombre no es valido <br>'
        entrar = true;
    }else{
        campos['nombre'] = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>';
        entrar = true;
    }else{
        campos['email'] = true;
    }
    if(pass.value.length < 8){
        warnings += 'La contraseña es corta <br>';
        entrar = true;
    }else{
        campos['pass'] = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }

    if (campos.nombre && campos.email && campos.pass) {
        registrarProducto();
    }
});


var cont = 1;

function registrarProducto() {

        const nombre = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;

        var tbody = document.getElementById("cuerpoTabla");

        var tr = document.createElement("tr");
        tr.id = "tr" + nombre;                                                
        
        
        var cId = document.createElement("td");
        cId.innerHTML = cont++;                     
        var celNombre = document.createElement("td");
        celNombre.innerHTML = nombre;
        var celEmail = document.createElement("td");
        celEmail.innerHTML = email;
        var celPassword = document.createElement("td");
        celPassword.innerHTML = pass.innerHTML = "****";
        

        var celActions = document.createElement("td");

        var btnDelete = document.createElement("button");
        btnDelete.value = "tr" + nombre;
        btnDelete.innerHTML = "Eliminar";
        btnDelete.value = "tr" + nombre;
        btnDelete.addEventListener("click",
            (e) => {if(confirm("¿Deseas eliminar este producto?")) eliminarObjeto(e.target.value); },
            false);
        celActions.appendChild(btnDelete);

        tr.appendChild(cId);
        tr.appendChild(celNombre);
        tr.appendChild(celEmail);
        tr.appendChild(celPassword);
        tr.appendChild(celActions);
        tbody.appendChild(tr);
        };

function eliminarObjeto(valor) {
    var tr = document.getElementById(valor);
    var tbody = document.getElementById("cuerpoTabla");
    tbody.removeChild(tr);

}