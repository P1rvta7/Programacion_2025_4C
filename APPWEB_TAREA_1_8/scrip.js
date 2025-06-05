function sumarNaturales() {
const n = parseInt(prompt("Ingrese un número N:"));
let suma = 0;
for (let i = 1; i <= n; i++) {
    suma += i;
}
document.getElementById("resultado").innerText = `La suma de los ${n} primeros números naturales es: ${suma}`;
}

function primerosPares() {
let pares = [];
for (let i = 2; pares.length < 100; i += 2) {
    pares.push(i);
}
document.getElementById("resultado").innerText = "Primeros 100 pares:\n" + pares.join(", ");
}

function primerosImpares() {
let impares = [];
for (let i = 1; impares.length < 100; i += 2) {
    impares.push(i);
}
document.getElementById("resultado").innerText = "Primeros 100 impares:\n" + impares.join(", ");
}

function sumarNNumeros() {
const n = parseInt(prompt("¿Cuántos números desea sumar?"));
let suma = 0;
for (let i = 1; i <= n; i++) {
    const numero = parseFloat(prompt(`Ingrese el número ${i}:`));
    suma += numero;
}
document.getElementById("resultado").innerText = `La suma de los ${n} números es: ${suma}`;
}

function calculadora() {
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const operacion = prompt("Ingrese la operación (suma, resta, multiplicar, dividir):").toLowerCase();
let resultado;

switch (operacion) {
    case "suma":
    resultado = num1 + num2;
    break;
    case "resta":
    resultado = num1 - num2;
    break;
    case "multiplicar":
      resultado = num1 * num2;
    break;
    case "dividir":
    resultado = num2 !== 0 ? num1 / num2 : "No se puede dividir por 0";
    break;
    default:
    resultado = "Operación no válida";
  }

document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
