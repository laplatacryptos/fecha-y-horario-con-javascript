//ubicamos elemento dentro del dom
const txt = document.getElementById('txt');
const txt2 = document.getElementById('txt2');
const txt3 = document.getElementById('txt3');
const txt4 = document.getElementById('txt4');
const txt5 = document.getElementById('txt5');
const txt6 = document.getElementById('txt6');
const txt7 = document.getElementById('txt7');
const txt8 = document.getElementById('txt8');
const calendario = document.querySelector('p');
//Mostrar fecha actual
//formato:    09/10/2023   
                  //new VideoPlaybackQuality cambia la calidad de video
                  //new audio volumen
                  //new Date para fecha
//crear un objeto de fecha
const fecha = new Date(); //CREO FECHA
//console.log = fecha;

//obtenemos el numero de dia del mes
let diaDelMes = fecha.getUTCDate();//TOMO NUMERO DE DIA EN EL MES
let diaDeLaSemana = fecha.getDay(); //TOMO DIA DE LA SEMANA EXPRESADO EN NUM
let año = fecha.getFullYear();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();
let mes =fecha.getMonth();
let nombreDiaDeLaSemana;
switch (diaDeLaSemana){ //SEGUN EL DIA EXPRESADO EN NUM LE ASIGNO AL TX VALOR TEXTO

    case 1:
        nombreDiaDeLaSemana = `Lunes`;
        break;
    case 2:
        nombreDiaDeLaSemana = `Martes`;
        break;
    case 3:
        nombreDiaDeLaSemana = `Miercoles`;
        break;
    case 4:
        nombreDiaDeLaSemana = `Jueves`;
        break;
    case 5:
        nombreDiaDeLaSemana = `Viernes`;
        break;
    case 6:
        nombreDiaDeLaSemana = `Sábado`;
        break;
    case 7:
        nombreDiaDeLaSemana = `Domingo`;
        break;
    default: 'No es un mes válido'
}
let mesTexto;
switch (mes){
    case 0:
    mesTexto = `Enero`;
    mes = 1;
    break;
    case 1:
    mesTexto = `Febrero`;
    mes = 2;
    break;
    case 2:
    mesTexto = `Marzo`;
    mes = 3;
    break;
    case 3:
    mesTexto = `Abril`;
    mes = 4;
    break;
    case 4:
    mesTexto = `Mayo`;
    mes = 5;
    break;
    case 5:
    mesTexto = `Junio`;
    mes = 6;
    break;
    case 6:
    mesTexto = `Julio`;
    mes = 7;
    break;
    case 7:
    mesTexto = `Agosto`;
    mes = 8;
    break;
    case 8:
    mesTexto = `Septiembre`;
    mes = 9;
    break;
    case 9:
    mesTexto = `Octubre`;
    mes = 10;
    break;
    case 10:
    mesTexto = `Noviembre`;
    mes = 11;
    break;
    case 11:
    mesTexto = `Diciembre`;
    mes = 12;
    break;
    default:
        mes = `No es un mes válido`;
}
//RESPUESTA
    if(segundos < '10'){
       segundos = `0${segundos}`;
    }
    if(minutos < '10'){
        minutos = `0${minutos}`;
     }
     if(hora < '10'){
        hora = `0${hora}`;
     }
calendario.innerText = fecha;
//imprimimos dentro del spam
txt.innerText = `Es la fecha: ${diaDelMes}`;
txt2.innerText = `El día de la semana es: ${nombreDiaDeLaSemana}`;
txt3.innerText = `Es el año: ${año}`;
txt4.innerText = `Es la hora: ${hora}`;
txt5.innerText = `Los minutos correspondientes a la hora declarada(${hora}),son: ${minutos}`;
txt6.innerText = `Los segundos correspondientes a los minutos declarados(${minutos}) de la hora declarada(${hora}) son: ${segundos}`;
txt7.innerText = `Es el mes: ${mesTexto}`;
txt8.innerText = `\n${nombreDiaDeLaSemana}\n${diaDelMes}/${mes}/${año}\n${hora}:${minutos}:${segundos}`;




/*jugamos con estilo un poco*/

Object.assign(document.querySelector('body').style,{
    backgroundColor: 'red',padding: '5%',margin: '0',
});

Object.assign(document.querySelector('h1').style,{
    color: 'red',
    fontSize: '48px',
    backgroundColor: 'lightgray'
});
Object.assign(document.querySelector('p').style,{
    fontSize: '28px',
    color: '#345363',
    backgroundColor: 'pink',
    textAlign: 'start',
    
}
);
Object.assign(document.querySelector('#txt8').style,{
    padding: '20%',border:'0.5px white solid',
}
);
const elementosDiv = document.querySelectorAll('div'); // Selecciono todos los elementos div
elementosDiv.forEach((div) => {
    div.style.color = 'white'; // Aplico el estilo a cada elemento div
});
Object.assign(document.querySelector('ul li:nth-child(8)').style,{
    listStyle: 'none',width: '120px',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',margin: 'auto', 
})