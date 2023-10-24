function avisoLluvia(estaLloviendo){
    if (estaLloviendo) {
        console.log("Esta lloviendo");
    }else{
        console.log("No esta lloviendo");
    }
};

avisoLluvia(false);

function calcular(x,y,z){
    
    var resultado = (x+y)*z;

    console.log(resultado)
}

calcular(2,5,3);

function calculadora(operacion, x, y){
    if(operacion== "suma"){
        return x + y;
    }else if(operacion == "resta"){
        return x - y;
    }else if(operacion == "multiplicación"){
        return x * y;
    }else if(operacion == "división"){
        return x / y;
    }else if(operacion == "exponenciación"){
        return x ** y;
    }else if(operacion == "residuo"){
        return x % y;
    }else{
        var mj = "No es ninguna de las anteriores";
        return mj; 
    }
};

console.log(calculadora("multiplicación", 2, 4));