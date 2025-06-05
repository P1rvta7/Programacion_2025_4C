let n1 = parseInt(prompt("Ingrese un número para imprimir del 1 a n:"));
let i1 = 1;
let numeros1 = [];

while (i1 <= n1) {
    numeros1.push(i1);
    i1++;
}

alert("Números del 1 al " + n1 + ": " + numeros1.join(", "));
let n2 = parseInt(prompt("Ingrese un número para cuenta regresiva:"));
let numeros2 = [];

while (n2 >= 1) {
    numeros2.push(n2);
    n2--;
}

alert("Cuenta regresiva: " + numeros2.join(", "));
let n3 = parseInt(prompt("Ingrese un número para sumar los primeros n números:"));
let suma = 0;

for (let i = 1; i <= n3; i++) {
    suma += i;
}

console.log("La suma de los primeros " + n3 + " números es: " + suma);
let n4 = parseInt(prompt("Ingrese un número límite para imprimir múltiplos de 2:"));
let multiplos2 = [];

for (let i = 1; i <= n4; i++) {
    if (i % 2 === 0) {
        multiplos2.push(i);
    }
}

alert("Múltiplos de 2 entre 1 y " + n4 + ": " + multiplos2.join(", "));
