console.log(Date());

let fecha = new Date();
console.log(fecha);
//Dia del mes
console.log(fecha.getDay());
//Dia de la semana
console.log(fecha.getDay());
//Mes
console.log(fecha.getMonth());
//Año
console.log(fecha.getFullYear());
//Hora
console.log(fecha.getHours());
//Minutos
console.log(fecha.getMinutes());
//Segundos
console.log(fecha.getSeconds());
//Milisegundos
console.log(fecha.getMilliseconds());
//saca solo la parte de la fecha
console.log(fecha.toDateString());
//fecha y dia
console.log(fecha.toLocaleString);
//solamente la fecha
console.log(fecha.toLocaleTimeString());
//Solamente la hora
console.log(fecha.toLocaleTimeString());
//Uso horario de nuestra zona
console.log(fecha.getTimezoneOffset());
//dia del meridiano 0
console.log(fecha.getUTCDate());
//hora del meridiano 0
console.log(fecha.getUTCHours());
//tiempo en segundos tipo timestamp o algo asi desde el 1 de enero de 1970
console.log(Date.now());
// fecha y dia en que nací
let CumpleLeyder = new Date(2005,1,14);
console.log(CumpleLeyder);

const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = ["Enero", "Febrero", "Marzo",
                    "Abril", "Mayo", "Junio", "Julio",
                    "Agosto", "Septiembre", "Octubre",
                    "Noviembre", "Diciembre"];

const interval = setInterval(() => {

    const local = new Date();

    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day} ${monthNames[month]} ${year}`; 

}, 1000);