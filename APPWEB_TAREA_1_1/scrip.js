// Variables de diferentes tipos en JavaScript

// Número entero
let numeroEntero = 25;

// Número decimal
let numeroDecimal = 3.14;

// Cadena de texto
let cadenaTexto = "Hola, soy una cadena";

// Valor booleano
let booleano = true;

// Arreglo (array)
let arreglo = [1, 2, 3, 4, 5];

// Objeto (objeto con pares clave-valor)
let objeto = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Madrid"
};

// Variable indefinida
let indefinida;

// Variable nula
let nulo = null;

// Constante
const mes = "Junio";

// Funciones para mostrar variables con alert()
function mostrarNumeroEntero() {
    alert("Número entero: " + numeroEntero);
}

function mostrarNumeroDecimal() {
    alert("Número decimal: " + numeroDecimal);
}

function mostrarCadenaTexto() {
    alert("Cadena de texto: " + cadenaTexto);
}

function mostrarBooleano() {
    alert("Booleano: " + booleano);
}

function mostrarArreglo() {
    alert("Arreglo: " + arreglo.join(", "));
}

function mostrarObjeto() {
    alert("Objeto: " + JSON.stringify(objeto));
}

function mostrarIndefinida() {
    alert("Indefinida: " + indefinida);
}

function mostrarNulo() {
    alert("Nulo: " + nulo);
}

function mostrarConstanteMes() {
    alert("Constante mes: " + mes);
}

// Función que realiza una operación simple
function operacion(num1, num2) {
    let resultado = num1 + num2;
    alert("Resultado de la operación (" + num1 + " + " + num2 + "): " + resultado);
    return resultado;
}

// Llamadas a las funciones
mostrarNumeroEntero();
mostrarNumeroDecimal();
mostrarCadenaTexto();
mostrarBooleano();
mostrarArreglo();
mostrarObjeto();
mostrarIndefinida();
mostrarNulo();
mostrarConstanteMes();
operacion(10, 20);
