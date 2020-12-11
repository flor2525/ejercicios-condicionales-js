

// Ejercicios con operadores lógicos
// EJERICIO 1 - puedeVerPelicula(edad, tieneAutorizacion)



// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//     if (edad >= 15 || tieneAutorizacion === true){
//         return true;
//     } else {
//         return false;
//     }
// }

// Con retorno implícito...
// const puedeVerPelicula = (edad, tieneAutorizacion) => edad >= 15 || tieneAutorizacion === 'true';


// console.log(puedeVerPelicula(12, false));
// console.log(puedeVerPelicula(12, true));
// console.log(puedeVerPelicula(16, true));
// console.log(puedeVerPelicula(18, true));


// EJERCICIO 2 - estaEnRango(valor, minimo, maximo)

// const estaEnRango = (valor, minimo, maximo) => {
//     if (valor >= minimo && valor <= maximo){
//         return true;
//     } else {
//         return false;
//     }
// }

// Con retorno implícito...
// const estaEnRango = (valor, minimo, maximo) => valor >= minimo && valor <= maximo;


// console.log(estaEnRango(3, 1, 10));
// console.log(estaEnRango(1, 1, 10));
// console.log(estaEnRango(10, 1, 10));
// console.log(estaEnRango(12, 1, 10));
// console.log(estaEnRango(-3, 1, 10));

// EJERCICIO 3 - puedeAvanzar(colorSemaforo)


// const avanza = () => 'Puede avanzar';
// const noAvanza = () => 'No puede avanzar';
// const errorEnColor = () => 'Error: color de semáforo inválido';


// const puedeAvanzar = (color) => {
//     if (color === 'verde'){
//         return avanza();
//     } else if (color === 'amarillo' || color === 'rojo'){
//         return noAvanza();
//     } else {
//         return errorEnColor();
//     }
// }


// console.log(puedeAvanzar('verde'));
// console.log(puedeAvanzar('amarillo'));
// console.log(puedeAvanzar('rojo'));
// console.log(puedeAvanzar('lila'));

// EJERCICIO 4 - esVocal(letra)

// const vocales = /^[aeiou]$/i
// const esVocal = (letra) => vocales.test(letra);

// console.log(esVocal('a'));
// console.log(esVocal('n'));

// EJERCICIO 5 - esConsonante(letra)

 // const vocales = /^[aeiou]$/i
// const esConstante = (letra) => !vocales.test(letra);  

// console.log(esConsonante('a'));
// console.log(esConsonante('n'));

// EJERCICIO 6 - puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)

// const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
//     if (pasoTests === true && tieneMultasImpagas === false && pagoImpuestos === true){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(puedeRenovarCarnet(true, true, true));
// console.log(puedeRenovarCarnet(true, true, false));
// console.log(puedeRenovarCarnet(true, false, true));
// console.log(puedeRenovarCarnet(true, false, false));
// console.log(puedeRenovarCarnet(false, true, true));
// console.log(puedeRenovarCarnet(false, true, false));
// console.log(puedeRenovarCarnet(false, false, true));
// console.log(puedeRenovarCarnet(false, false, false));


// EJERCICIO 7 - 
// puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)

// const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
//     if (asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === true){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(puedeGraduarse(80, 50, true));
// console.log(puedeGraduarse(80, 50, false));
// console.log(puedeGraduarse(80, 45, true));
// console.log(puedeGraduarse(80, 45, false));
// console.log(puedeGraduarse(65, 50, true));
// console.log(puedeGraduarse(33, 55, false));
// console.log(puedeGraduarse(42, 45, true));
// console.log(puedeGraduarse(28, 45, false));

// Ejercicios con condicionales

// EJERCICIO 1 - esParOImpar(numero)

// const esParOImpar = (num) => {
//     if (num % 2 === 0) {
//         return 'Es par';
//     } else {
//         return 'Es impar';
//     }
// }

// console.log(esParOImpar(3));
// console.log(esParOImpar(10));


// EJERCICIO 2 - esPositivoONegativo(numero)

// const esPositivoONegativo = (num) => {
//     if (num >= 0){
//         return 'Positivo';
//     } else {
//         return 'Negativo';
//     }
// }

// console.log(esPositivoONegativo(3));
// console.log(esPositivoONegativo(-5));

// EJERCICIO 3 - avanzarSemaforo(colorActual)

// const avanzarSemaforo = (colorActual) => {
//     if (colorActual === 'verde') {
//         return 'amarillo';
//     } else if (colorActual === 'amarillo'){
//         return 'rojo';
//     } else if (colorActual === 'rojo'){
//         return 'verde';
//     }
// }


// console.log(avanzarSemaforo('verde'));
// console.log(avanzarSemaforo('amarillo'));
// console.log(avanzarSemaforo('rojo'));

// EJERCICIO 4 - obtenerDiasMes(mes)

// const obtenerDiasMes = (mes) => {
//     if (mes === 'abril' || mes === 'junio' || mes === 'septiembre' || mes === 'noviembre'){
//          return 30;
//     } else if (mes === 'febrero'){
//         return 29;
//     } else {
//         return 31;
//     }
// }

// console.log(obtenerDiasMes('diciembre'));
// console.log(obtenerDiasMes('febrero'));

// EJERCICIO 5 - obtenerGeneracion(anioNacimiento)

// const obtenerGeneracion = (anioNacimiento) => {
// if (anioNacimiento >= 1949 && anioNacimiento <= 1968){
//     return 'Baby boomer';
//     } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980){
//     return 'Generación X';
//     } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993){
//         return 'Milennials'
//     } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010){
//         return 'Generación Z';
//     }9
// }

// console.log(obtenerGeneracion(1950));
// console.log(obtenerGeneracion(2000));

// EJERCICIO 6 - obtenerSensacion(temperatura)

// const obtenerSensacion = (temperatura) => {
//     if (temperatura < 0){
//         return '¡Está helado!';
//     } else if (temperatura >= 0 && temperatura < 15){
//         return '¡Hace frío!';
//     } else if (temperatura >= 15 && temperatura < 25){
//         return 'Está lindo';
//     } else if (temperatura >= 25 && temperatura < 30){
//         return 'Hace calor';
//     } else if (temperatura >= 30){
//         return '¡Hace mucho calor!';
//     }
// }

// console.log(obtenerSensacion(33));

// EJERCICIO 7 - obtenerNota(puntaje)

// const obtenerNota = (puntaje) => {
//     if (puntaje < 6){
//         return 'desaporbado';
//     } else if (puntaje >= 6 && puntaje < 7){
//         return 'regular';
//     } else if (puntaje >= 7 && puntaje < 8){
//         return 'bueno';
//     } else if (puntaje >= 8 && puntaje < 10){
//         return 'Muy bueno';
//     } else if (puntaje === 10){
//         return 'Excelente';
//     } else {
//         return 'puntaje inválido';
//     }
// }

// console.log(obtenerNota(7));
// console.log(obtenerNota(Math.ceil(9.6)));
// console.log(obtenerNota(12));

// EJERCICIO 8 - jugarPiedraPapelTijera(a, b)

// const jugarPiedraPapelTijera = (a, b) => {
//     if (a === b){
//         return 'Es un empate';
//     } else if ((a === 'tijera' && b === 'piedra') || (a === 'piedra' && b === 'tijera')){
//          return 'Ganó piedra';
//     } else if ((a === 'papel' && b === 'piedra') || (a === 'piedra' && b === 'papel')){
//         return 'Ganó papel';
//     } else if ((a === 'tijera' && b === 'papel') || (a === 'papel' && b === 'tijera')){
//         return 'Ganó tijera';
//     }
// }

// console.log(jugarPiedraPapelTijera('tijera', 'piedra'));
// console.log(jugarPiedraPapelTijera('piedra', 'tijera'));
// console.log(jugarPiedraPapelTijera('papel', 'piedra'));
// console.log(jugarPiedraPapelTijera('piedra', 'papel'));
// console.log(jugarPiedraPapelTijera('papel', 'tijera'));
// console.log(jugarPiedraPapelTijera('tijera', 'papel'));
// console.log(jugarPiedraPapelTijera('piedra', 'piedra'));
// console.log(jugarPiedraPapelTijera('papel', 'papel'));
// console.log(jugarPiedraPapelTijera('tijera', 'tijera'));
