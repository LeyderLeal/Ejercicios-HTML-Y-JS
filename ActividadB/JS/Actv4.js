function Perro (nombre, edad, vivo){
    this.nombre = nombre;
    this.edad = edad;
    this.vivo = vivo;
};

function Gato (nombre, edad, vivo){
    this.nombre = nombre;
    this.edad = edad;
    this.vivo = vivo;
};

var perro1 = new Perro("Cookies", 5, false);
var perro2 = new Perro("Tony", 4, true);

var perros = [perro1, perro2];
console.log(perros);

var gato1 = new Gato("Manchas", 6, false);
var gato2 = new Gato("Gata", 1, true);

var gatos = [gato1, gato2];
console.log(gatos);