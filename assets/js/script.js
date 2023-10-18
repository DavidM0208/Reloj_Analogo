// 12 veces tiene que dar vuelta la hora, el intervalo es de 30 grados por segundo para que me quede en punto
// 60 veces tiene que dar vuelta el minuto, el intervalo es de 6 grados por segundo para que me quede en punto,igual que para los segundos

const deg = 6; // Grados

// Los querySelector van a guardar los id de cada elemento
const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(()=>{
    let tiempo = new Date();
    // Intervalos de refresco para la hora, minutos y segundos
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;
    
    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`
    segundos.style.transform = `rotate(${seg}deg)`

})
