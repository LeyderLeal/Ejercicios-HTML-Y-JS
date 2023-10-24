function mostrar(boton){
    var tipo = document.getElementById("password");

    if(tipo.type == 'password'){
        tipo.type = 'text';
        boton.innerText="Ocultar";
    } else {
        tipo.type = 'password';
        boton.innerText="Mostrar";
    }
}