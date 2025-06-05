function tablaMultiplicar() {
let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
let tabla = [];

for (let i = 1; i <= 10; i++) {
    tabla.push(`${numero} x ${i} = ${numero * i}`);
}

alert("Tabla del " + numero + ":\n" + tabla.join("\n"));
}

function sumarNumeros() {
let cantidad = parseInt(prompt("¿Cuántos números desea sumar?"));
let suma = 0;

for (let i = 1; i <= cantidad; i++) {
    let numero = parseFloat(prompt(`Ingrese el número ${i}:`));
    suma += numero;
}

alert("La suma total es: " + suma);
}

function mostrarPares() {
let inicio = parseInt(prompt("Ingrese el número inicial:"));
let fin = parseInt(prompt("Ingrese el número final:"));
let pares = [];

for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
    pares.push(i);
    }
}

alert("Números pares entre " + inicio + " y " + fin + ":\n" + pares.join(", "));
}