let numbers = [0,1,2,3,7,6,5,4,8,9];
let Cars = ["BMW","Audi","Lamborghini","Ferrari","Mitsubishi","Porsche","Ford","Toyota","Jeep","Tesla"];
const beers = [{
    name: "Heineken",
    price: 3.50,
    alcohol: 4.5
},{
    name: "Stella Artois",
    price: 5.50,
    alcohol: 5.0
},{
    name: "Corona",
    price: 2.50,
    alcohol: 5.0
},{
    name: "Budweiser",
    price: 6,
    alcohol: 4.5
}];
const beers2 = beers.map(element=>{//nuevo array con map
    return {
        name: element.name,
        price: element.price * 2,
        alcohol: element.alcohol
    }
})
//reduce 
//inmutable
const carros = Cars.concat(numbers);//unir dos arrays
const Cars2 = Cars.slice(1,4);//mostrar una parte del array

//mutable
Cars.push("Kia");//agregar un objeto al ultimo lugar de la lista
Cars.unshift("Cadillac");//agregar un objeto al primer lugar de la lista
Cars.splice(2, 0, "Mazda");//agregar o eliminar un elemento en la pocision que pongas
Cars.fill(":)",1,3);//llena el array con un dato
numbers.sort();//ordenar numeros
beers.sort((a, b) => {
    if (a.name > b.name){
        return 1;
    }
    if (a.name < b.name){
        return -1;
    }
    return 0;
});//ordena objetos depende de la variable
//beer.reverse(); para invertir el orden
// let b =Cars.pop();//elimina el ultimo pero lo almacena en una variable
// let b2 =Cars.shift();//elimina el primero pero lo almacena en una variable

console.log(Cars.indexOf("Audi"));//regresa la posicion del objeto

console.log(numbers[0]);//primer objeto en el array
console.log(numbers[numbers.length-1]);//forma de empezar del ultimo al primer objeto
console.log(numbers.at(-2));//otra formar
console.log(numbers.length);//numero de objetos que hay

//suma numeros de un array
function sum(a,b,c,d){
    return a+b+c+d;
}
console.log(sum(...numbers));
 
const arr = [...numbers, "Horus", "Gata", "Toni", "Rocky", ...Cars];//como el concat y se le puede agregar objetos

//hacer una copia de un array apread

const numbers2 = [...numbers];
numbers2[0] = 100;
numbers[1] = 200;

console.log("---------------");

//recorrer todos los numeros
for(let i = 0 ; i < numbers.length; i++){
    console.log(numbers[i]);
}

//recorre los numeros del ultimo al primero
console.log("---------------");
for(let i = numbers.length -1 ; i >= 0; i--){
    console.log(numbers[i]);
}

console.log("---------------");

showDom("array1", Cars);
showDom("array2", carros);
showDom("array3", Cars2);
showDom("array4", arr);
showDom("array5", numbers2)
showDom1("array6", beers);
showDom1("array7", beers2);

function show(arr){
    for(let i = 0 ; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function showDom(element, arr){
    document.getElementById(element).innerHTML = "";
   
    for(let i=0; i < arr.length; i++){
        document.getElementById(element).innerHTML +=
        `<div>${arr[i]}<div>`
    }
}


function showDom1(element, arr){
    document.getElementById(element).innerHTML = "";
//    for of
    for(let e of arr){
        document.getElementById(element).innerHTML +=
        `<div>${e.name} $ ${e.price} (${e.alcohol})<div>`
    }
}

let nf = (e) => e.price > 5;
console.log(beers.every(nf));// ver si todos los objetos del array cumplen la condicion
console.log(beers.some(nf));// ver si al menos 1 de los objetos del array cumplen la condicion


console.log("-----------------");
// Funcion De Primer Orden
 let fn = () => {
    console.log("Hello");
    console.log("Word")
 }

// Funcion de Order Superior

 function some(f){
    console.log("algo antes");
    f();
    console.log("algo despues");
 }

 some(fn);

 beers.forEach((element)=>console.log(element));

 console.log("--------------------")
// Buscar en los arrays
const beer = beers.find(element => element.name === "Corona");
console.log(beer);//uno

const beer1 = beers.filter(element => element.alcohol < 5);
console.log(beer1);//muchos