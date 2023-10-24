function promedio(){

    let num1 = parseFloat(prompt("Ingrese su primer nota: "));
    let num2 = parseFloat(prompt("Ingresar su segunda nota: "));
    let num3 = parseFloat(prompt("Ingresar su tercera nota: "));
    let promedio;

    if(
        num1 != "" &&
        num2 != "" &&
        num3 != "" &&
        !isNaN(num1) &&
        !isNaN(num2) 
    ) {
            promedio = (num1 + num2)/2;
            console.log("El promedio es de: "+ promedio);

    } else{
        console.log("error");
    }

    if (promedio >= 3){
        console.log("APROBO");

    } else {
        console.log("DESAPROBO");
    }
};