// Ejercicio 1: Suma de dos números
function ejercicioSuma() {
    let num1 = 8;
    let num2 = 12;
    let suma = num1 + num2;
    document.getElementById("resultado").innerText = "La suma es: " + suma;
}

// Ejercicio 2: Saludo personalizado
function ejercicioSaludo() {
    let nombre = "Ana";
    let saludo = "Hola " + nombre + ", bienvenida!";
    document.getElementById("resultado").innerText = saludo;
}

// Ejercicio 3: Verificar condición booleana
function ejercicioBooleans() {
    let edad = 18;
    let esMayor = edad >= 18;
    document.getElementById("resultado").innerText = "¿Es mayor de edad? " + esMayor;
}

// Ejercicio 4: Calcular el área de un rectángulo
function ejercicioArea() {
    let base = 5;
    let altura = 10;
    let area = base * altura;
    document.getElementById("resultado").innerText = "Área del rectángulo: " + area + " unidades cuadradas.";
}

// Ejercicio 5: Suma de Valores tomando índices de un arreglo
function Suma_indices() {
    let numeros = [1, 2, 3, 4, 5, 6, 7];
    let resultado = numeros[6] + numeros[5] + numeros[0]; // último + penúltimo + primero
    alert("Resultado de la suma: " + resultado);
}

// Ejercicio 6: Producto de Valores Pares en un Arreglo
function Producto_pares() {
    let valores = [2, 4, 6, 7, 10, 12];
    let producto = 1;

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 === 0) {
            producto *= valores[i];
        }
    }

    alert("Producto de los números pares: " + producto);
}
