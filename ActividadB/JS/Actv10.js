(function() {

    var saludo = function(){
        alert('Saludo');
    };

    var saludoo = function(){
        alert('Ten buen día.');
    };

    var saludo2 = function(){
        console.log('focus!');
    };

    var saludo3 = function(){
        console.log('blur!');
    };

    var saludo4 = function(){
        console.log('change');
    };

    var saludo5 = function(e){
        console.log('Este evento es de tipo: ' + e.type);
    };

    var saludo6 = function(e){
        console.log('Este evento es de tipo: ' + e.target);
    };

    var saludo7 = function(e){
        console.log("Prevenir es mejor que curar");
        e.preventDefault();
    };

    var boton = document.getElementById('boton');
    boton.addEventListener("click", saludo);
    boton.addEventListener("click", saludoo);
    boton.removeEventListener("click", saludo);

    var boton = document.getElementById('boton');
    boton.addEventListener("click", saludo6);

    var boton = document.getElementById('boton');
    boton.addEventListener("click", saludo5);

    var a = document.getElementById('a');
    a.addEventListener("click", saludo7);

    var input = document.getElementById('input');
    input.addEventListener("focus", saludo2);

    var input = document.getElementById('input');
    input.addEventListener("blur", saludo3);

    var input = document.getElementById('input');
    input.addEventListener("change", saludo4);
}())