let numero = 7; // Cambia este valor para probar con otros números

if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
let peso = 68;      // Peso en kilogramos
let altura = 1.70;  // Altura en metros

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Bajo peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
} else {
    console.log("Sobrepeso");
}
let nota1 = 5.5;
let nota2 = 4.8;
let nota3 = 6.0;

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio < 4.0) {
    console.log("Reprobado");
} else {
    console.log("Aprobado");
}
