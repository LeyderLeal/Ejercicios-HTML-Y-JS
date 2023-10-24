function VolumenCono(){
    var Radio = 0
    var Altura = 0
    var Resultados = 0
    Radio=document.getElementById("Rad").value;
    Altura=document.getElementById("Alt").value;
    Radio=parseFloat(Radio);
    Altura=parseFloat(Altura);
    if(isNaN(Radio) || isNaN(Altura)){
        alert("Todos los campos deben estar llenos.");
    }else{
        if(Radio<0 || Altura<0){
            alert("Los valores debes ser mayores a 0");
        }else{
            Resultados=Math.PI*Math.pow(Radio, 2)*Altura/3;
            document.getElementById("Result").value=Resultados;
        }
    }
}