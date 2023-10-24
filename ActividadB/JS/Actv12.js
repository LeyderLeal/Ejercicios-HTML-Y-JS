var aCuadrado = document.getElementById("cuadrado");
var aTriangulo = document.getElementById("triangulo");
var aCirculo = document.getElementById("circulo");

var base;
var alt;
var area;
var lado;
var diametro;
var radio;

aCuadrado.onclick = function(e){
    lado = prompt("Ingrese un lado del cuadrado: ");
    area = lado*lado;
    alert("El area del cuadrado es de: " + area);
};

aTriangulo.onclick = function(e){
    base = prompt("Ingrese la base del triángulo: ");
    alt = prompt("Ingrese la altura del triángulo: ");
    area = base*alt/2;
    alert("El area del triángulo es de: " + area);
};

aCirculo.onclick = function(e){
    diametro = prompt("Ingrese el diametro del círculo: ");
    radio = diametro/2;
    area = 3.14*(radio*radio);
    alert("El area del círculo es de: " + area);
};