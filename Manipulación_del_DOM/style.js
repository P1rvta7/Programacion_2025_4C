// ==============================
// Ejercicio 1: Registro Estudiante
// ==============================
const formEstudiante = document.getElementById("formEstudiante");
const resultadoEstudiante = formEstudiante.nextElementSibling;
const errorEstudiante = resultadoEstudiante.nextElementSibling;
const btnLimpiarEstudiante = document.getElementById("btnLimpiarEstudiante");

let estudiantes = [];

formEstudiante.addEventListener("submit", (e) => {
e.preventDefault();
resultadoEstudiante.textContent = "";
errorEstudiante.textContent = "";

const nombreInput = document.getElementById("nombre").value.trim();
const edadInput = parseInt(document.getElementById("edad").value);
const cursoInput = document.getElementById("curso").value;
const jornadaInput = document.querySelector('input[name="jornada"]:checked');
const aceptaReglamento = document.getElementById("reglamento").checked;

  // Validaciones
if (nombreInput.length < 2) {
    errorEstudiante.textContent = "El nombre debe tener al menos 2 caracteres.";
    return;
}
if (isNaN(edadInput) || edadInput < 14 || edadInput > 100) {
    errorEstudiante.textContent = "La edad debe estar entre 14 y 100.";
    return;
}
if (!cursoInput) {
    errorEstudiante.textContent = "Debe seleccionar un curso.";
    return;
}
if (!jornadaInput) {
    errorEstudiante.textContent = "Debe seleccionar una jornada.";
    return;
}
if (!aceptaReglamento) {
    errorEstudiante.textContent = "Debe aceptar el reglamento.";
    return;
}

  // Normalizar nombre
const nombreNormalizado = nombreInput
    .split(" ")
    .filter(p => p !== "")
    .map(p => p[0].toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");

  // Crear objeto estudiante
const estudiante = {
    nombre: nombreNormalizado,
    edad: edadInput,
    curso: cursoInput,
    jornada: jornadaInput.value
};

estudiantes.push(estudiante);

  // Contar por jornada
let conteoJornadas = { Mañana: 0, Tarde: 0 };
for (let est of estudiantes) {
    conteoJornadas[est.jornada]++;
}

resultadoEstudiante.innerHTML = `
    Bienvenido/a ${estudiante.nombre}, ${estudiante.edad} años, ${estudiante.curso}, jornada ${estudiante.jornada}.<br>
    Registrados: ${conteoJornadas["Mañana"]} en Mañana, ${conteoJornadas["Tarde"]} en Tarde.
`;
});

// Botón limpiar
btnLimpiarEstudiante.addEventListener("click", () => {
resultadoEstudiante.textContent = "";
errorEstudiante.textContent = "";
});

// ==============================
// Ejercicio 2: Promedio de Notas
// ==============================
const btnAgregarNota = document.getElementById("btnAgregarNota");
const btnCalcularPromedio = document.getElementById("btnCalcularPromedio");
const btnLimpiarNotas = document.getElementById("btnLimpiarNotas");
const resultadoNotas = document.querySelector("#formNotas + .resultado");
const errorNotas = resultadoNotas.nextElementSibling;

let notas = [];

// Agregar nota
btnAgregarNota.addEventListener("click", () => {
errorNotas.textContent = "";
resultadoNotas.textContent = "";

const notaInput = parseFloat(document.getElementById("nota").value);

if (isNaN(notaInput) || notaInput < 1 || notaInput > 7) {
    errorNotas.textContent = "La nota debe estar entre 1.0 y 7.0.";
    return; 
}

notas.push(notaInput);
resultadoNotas.textContent = `Notas actuales: ${notas.join(", ")}`;
document.getElementById("nota").value = "";
});

// Calcular promedio
btnCalcularPromedio.addEventListener("click", () => {
errorNotas.textContent = "";
resultadoNotas.textContent = "";

if (notas.length === 0) {
    errorNotas.textContent = "Debe ingresar al menos una nota.";
    return;
}

let suma = 0;
for (let n of notas) suma += n;

let promedio = (suma / notas.length).toFixed(2);
let estado = promedio >= 4 ? "Aprobado ✅" : "Reprobado ❌";

resultadoNotas.innerHTML = `
    Total de notas: ${notas.length}<br>
    Listado: ${notas.join(", ")}<br>
    Promedio: ${promedio} → ${estado}
`;
});

// Limpiar notas
btnLimpiarNotas.addEventListener("click", () => {
notas = [];
resultadoNotas.textContent = "";
errorNotas.textContent = "";
});
