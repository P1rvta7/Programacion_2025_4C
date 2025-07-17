// Ejercicio 1
let lista1 = [];
function agregarElemento1() {
const input = document.getElementById("input1");
const output = document.getElementById("output1");
if (input.value.trim() !== "") {
    lista1.push(input.value.trim());
    renderizarLista(lista1, output);
    input.value = "";
}
}

// Ejercicio 2
let lista2 = [];
function agregarElemento2() {
const input = document.getElementById("input2");
const output = document.getElementById("output2");
if (input.value.trim() !== "") {
    lista2.push(input.value.trim());
    renderizarLista(lista2, output);
    input.value = "";
}
}
function eliminarUltimo2() {
const output = document.getElementById("output2");
lista2.pop();
renderizarLista(lista2, output);
}

// Ejercicio 3
let colores = ["rojo", "azul"];
function agregarElemento3() {
const input = document.getElementById("input3");
const output = document.getElementById("output3");
if (input.value.trim() !== "") {
    colores.unshift(input.value.trim());
    renderizarLista(colores, output);
    input.value = "";
}
}
renderizarLista(colores, document.getElementById("output3"));

// Ejercicio 4
function agregarElemento4() {
const input = document.getElementById("input4");
const output = document.getElementById("output4");
if (input.value.trim() !== "") {
    colores.push(input.value.trim());
    renderizarLista(colores, output);
    input.value = "";
}
}
function eliminarPrimero4() {
const output = document.getElementById("output4");
colores.shift();
renderizarLista(colores, output);
}
renderizarLista(colores, document.getElementById("output4"));

// Ejercicio 5
function ejercicio5() {
let numeros = [10, 20, 30];
numeros.push(40);
numeros.shift();
numeros.unshift(5);
numeros.pop();
renderizarLista(numeros, document.getElementById("output5"));
}

// Ejercicio 6
function ejercicio6() {
let orden = [];
orden.unshift(3);
orden.unshift(2);
orden.unshift(1);
renderizarLista(orden, document.getElementById("output6"));
}

// Ejercicio 7
let historial = [];
function agregarElemento7() {
const input = document.getElementById("input7");
const output = document.getElementById("output7");
if (input.value.trim() !== "") {
    historial.push(input.value.trim());
    renderizarLista(historial, output);
    input.value = "";
}
}
function eliminarUltimo7() {
const output = document.getElementById("output7");
historial.pop();
renderizarLista(historial, output);
}

// Ejercicio 8
let cola = ["Cliente1", "Cliente2", "Cliente3"];
function agregarElemento8() {
const input = document.getElementById("input8");
const output = document.getElementById("output8");
if (input.value.trim() !== "") {
    cola.push(input.value.trim());
    renderizarLista(cola, output);
    input.value = "";
}
}
function eliminarPrimero8() {
const output = document.getElementById("output8");
cola.shift();
renderizarLista(cola, output);
}
renderizarLista(cola, document.getElementById("output8"));

// Ejercicio 9
function ejercicio9() {
let nombres = ["Pedro", "Juan", "Luis"];
nombres.pop();
nombres.unshift("Mateo");
nombres.push("Ana");
renderizarLista(nombres, document.getElementById("output9"));
}

// Ejercicio 10
function ejercicio10() {
let pila = [];
pila.push("Elemento 1", "Elemento 2", "Elemento 3");
let pop1 = pila.pop();
let pop2 = pila.pop();

let colaNueva = [];
colaNueva.push("Persona A", "Persona B", "Persona C");
let shift1 = colaNueva.shift();
let shift2 = colaNueva.shift();

const output = document.getElementById("output10");
output.innerHTML = `
    <p><strong>Pila - elementos quitados:</strong> ${pop1}, ${pop2}</p>
    <p><strong>Cola - personas atendidas:</strong> ${shift1}, ${shift2}</p>
`;
}

// Ejercicio 11
function ejercicio11() {
let dias = ["lunes", "miércoles", "jueves"];
dias.splice(1, 0, "martes");
dias.push("viernes");
renderizarLista(dias, document.getElementById("output11"));
}

// Ejercicio 12
function ejercicio12() {
let personas = ["Carlos", "María", "Luis", "Ana", "Sofía"];
  personas.shift(); // Carlos sale
  personas.pop();   // Sofía sale
  personas[0] = "María"; // Asegura María en primer lugar
personas[1] = "Luis";
  personas.splice(2, 1, "Camila"); // Ana reemplazada por Camila
  personas.unshift("Pedro"); // Pedro entra al inicio
renderizarLista(personas, document.getElementById("output12"));
}

// Ejercicio 13
function ejercicio13() {
let tareas = ["comer", "estudiar", "dormir", "jugar", "ver TV", "navegar"];
tareas.splice(2, 4, "lavar la ropa", "organizar escritorio");
renderizarLista(tareas, document.getElementById("output13"));
}

// Función común para mostrar listas
function renderizarLista(lista, contenedor) {
contenedor.innerHTML = "";
lista.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = item;
    contenedor.appendChild(li);
});
}
