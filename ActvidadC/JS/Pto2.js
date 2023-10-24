let form = document.querySelector('#form');
let aut = document.querySelector('#aut');
let bus = document.querySelector('#bus');
let cam = document.querySelector('#cam');
let tot = document.querySelector('#tot');
let btn1 = document.getElementById('btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');

function habilitar(){
    btn1.disabled=false;
    btn2.disabled=false;
    btn3.disabled=false;
    btn4.disabled=true;
    btn5.disabled=false;
    aut.value= "0";
    bus.value= "0";
    cam.value= "0";
    tot.value= "0";
}

function desabilitar(){
    btn1.disabled=true;
    btn2.disabled=true;
    btn3.disabled=true;
    btn4.disabled=false;
    btn5.disabled=true;
    aut.value= "";
    bus.value= "";
    cam.value= "";
    tot.value= "";
}

btn1.addEventListener("click", e=>{
    aut.value++;
    tot.value = parseFloat(tot.value) + parseFloat(5000);
})

btn2.addEventListener("click", e=>{
    bus.value++;
    tot.value = parseFloat(tot.value) + parseFloat(10000);
})

btn3.addEventListener("click", e=>{
    cam.value++;
    tot.value = parseFloat(tot.value) + parseFloat(15000);
})

