// ARITMETICOS
console.log("ARITMETICOS");

x = 5;
y = 2;

var a = x + y; var b = x - y;
console.log("Resultado de la suma es: " + a);
console.log("Resultado de la resta es: " + b);

var c = x * y; var d = x / y;
console.log("Resultado de la multiplicación es: " + c);
console.log("Resultado de la divición es: " + d);

var e = x % y; 
console.log("El modulo es: " + e);
x++;
console.log("Incremento es: " + x);
x--;
console.log("Decremento es: " + x);

//COMPARACIÓN
console.log("COMPARACIÓN");

console.log(10 < 5);
console.log(10 < 20);
console.log(10 <= 10);

console.log(10 > 5);
console.log(10 > 20);
console.log(10 >= 10);

console.log(5 == 5);
console.log("5" == 5);

console.log(5 != 5);
console.log(5 != 6)

console.log(5 === 5);
console.log("5" === 5);
console.log("5" !== 5);

// LOGICOS
console.log("LOGICOS");

var x = true;
var y = true;

var resultadoAND = x && y;
console.log("Resultado AND es: " + resultadoAND);
var resultadoOR = x || y;
console.log("Resultado OR es: " + resultadoOR);

x = true;
y = false;

resultadoAND = x && y;
console.log("Resultado AND es: " + resultadoAND);
resultadoOR = x || y;
console.log("Resultado OR es: " + resultadoOR);

x = false;
y = false;

resultadoAND = x && y;
console.log("Resultado AND es: " + resultadoAND);
resultadoOR = x || y;
console.log("Resultado OR es: " + resultadoOR);

x = false;
y = true;

var resultadoNOT = !x;
console.log("Resultado NOT es: " + resultadoNOT);
resultadoNOT = !y;
console.log("Resultado NOT es: " + resultadoNOT);

