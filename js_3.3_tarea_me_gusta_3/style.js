// ================== EJERCICIO 1 ==================
const formEstudiante = document.getElementById("formEstudiante");
const resultadoEstudiante = document.getElementById("resultadoEstudiante");
const errorEstudiante = document.getElementById("errorEstudiante");
const limpiarEstudiante = document.getElementById("limpiarEstudiante");

let registros = [];

formEstudiante.addEventListener("submit", (e) => {
e.preventDefault();
errorEstudiante.textContent = "";
resultadoEstudiante.textContent = "";

const nombreInput = document.getElementById("nombre").value.trim();
const edadInput = parseInt(document.getElementById("edad").value);
const cursoInput = document.getElementById("curso").value;
const jornadaInput = document.querySelector("input[name='jornada']:checked");
const aceptaReglamento = document.getElementById("aceptaReglamento").checked;

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

const nombreNormalizado = nombreInput
    .split(" ")
    .map((pal) => pal.charAt(0).toUpperCase() + pal.slice(1).toLowerCase())
    .join(" ");
const estudiante = {
    nombre: nombreNormalizado,
    edad: edadInput,
    curso: cursoInput,
    jornada: jornadaInput.value,
};

registros.push(estudiante);

let conteo = { Mañana: 0, Tarde: 0 };
for (let est of registros) {
    conteo[est.jornada]++;
}

resultadoEstudiante.innerHTML = `
    ✅ Bienvenido/a ${estudiante.nombre}, ${estudiante.edad} años, ${estudiante.curso}, Jornada: ${estudiante.jornada}. <br>
    Registrados: ${conteo["Mañana"]} en Mañana, ${conteo["Tarde"]} en Tarde.
`;
});

limpiarEstudiante.addEventListener("click", () => {
errorEstudiante.textContent = "";
resultadoEstudiante.textContent = "";
});

// ================== EJERCICIO 2 ==================
const notas = [];
const agregarNotaBtn = document.getElementById("agregarNota");
const calcularPromedioBtn = document.getElementById("calcularPromedio");
const limpiarNotasBtn = document.getElementById("limpiarNotas");
const resultadoNotas = document.getElementById("resultadoNotas");
const errorNotas = document.getElementById("errorNotas");

agregarNotaBtn.addEventListener("click", () => {
errorNotas.textContent = "";
const notaInput = parseFloat(document.getElementById("nota").value);

if (isNaN(notaInput) || notaInput < 1 || notaInput > 7) {
    errorNotas.textContent = "Ingrese una nota válida entre 1.0 y 7.0.";
    return;
}

notas.push(notaInput);
resultadoNotas.textContent = `Notas actuales: ${notas.join(", ")}`;
document.getElementById("nota").value = "";
});

calcularPromedioBtn.addEventListener("click", () => {
errorNotas.textContent = "";
if (notas.length === 0) {
    errorNotas.textContent = "Debe ingresar al menos una nota.";
    return;
}

let suma = 0;
for (let n of notas) suma += n;
const promedio = (suma / notas.length).toFixed(2);

const estado = promedio >= 4 ? "✅ Aprobado" : "❌ Reprobado";

resultadoNotas.innerHTML = `
    Notas: [${notas.join(", ")}] <br>
    Total: ${notas.length} <br>
    Promedio: ${promedio} <br>
    Resultado: ${estado}
`;
});

limpiarNotasBtn.addEventListener("click", () => {
notas.length = 0;
resultadoNotas.textContent = "";
errorNotas.textContent = "";
});

// ================== EJERCICIO 3 ==================
const formCalculadora = document.getElementById("formCalculadora");
const resultadoCalc = document.getElementById("resultadoCalc");
const errorCalc = document.getElementById("errorCalc");
const limpiarCalc = document.getElementById("limpiarCalc");

formCalculadora.addEventListener("submit", (e) => {
e.preventDefault();
errorCalc.textContent = "";
resultadoCalc.textContent = "";

const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
const operacion = document.getElementById("operacion").value;

if (isNaN(num1) || isNaN(num2) || !operacion) {
    errorCalc.textContent = "Debe ingresar dos números válidos y una operación.";
    return;
}

let resultado;
switch (operacion) {
    case "suma":
    resultado = num1 + num2;
    break;
    case "resta":
    resultado = num1 - num2;
    break;
    case "multiplicacion":
      resultado = num1 * num2;
    break;
    case "division":
    if (num2 === 0) {
        errorCalc.textContent = "No se puede dividir entre 0.";
        return;
    }
    resultado = num1 / num2;
    break;
}

resultadoCalc.textContent = `Resultado: ${resultado}`;
});

limpiarCalc.addEventListener("click", () => {
errorCalc.textContent = "";
resultadoCalc.textContent = "";
});

// ================== EJERCICIO 4 ==================
const formTareas = document.getElementById("formTareas");
const listaTareas = document.getElementById("listaTareas");
const errorTareas = document.getElementById("errorTareas");
const limpiarTareasBtn = document.getElementById("limpiarTareas");

let tareas = [];

formTareas.addEventListener("submit", (e) => {
e.preventDefault();
errorTareas.textContent = "";

const tareaInput = document.getElementById("tarea").value.trim();
if (tareaInput.length < 2) {
    errorTareas.textContent = "La tarea debe tener al menos 2 caracteres.";
    return;
}

tareas.push(tareaInput);
mostrarTareas();
formTareas.reset();
});

function mostrarTareas() {
listaTareas.innerHTML = "";
tareas.forEach((t, index) => {
    const li = document.createElement("li");
    li.textContent = t;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.addEventListener("click", () => {
    tareas.splice(index, 1);
    mostrarTareas();
    });
    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);
});
}

limpiarTareasBtn.addEventListener("click", () => {
tareas = [];
mostrarTareas();
});

// ================== EJERCICIO 5 ==================
const formEncuesta = document.getElementById("formEncuesta");
const resultadoEncuesta = document.getElementById("resultadoEncuesta");
const errorEncuesta = document.getElementById("errorEncuesta");
const limpiarEncuesta = document.getElementById("limpiarEncuesta");

let votos = { JavaScript: 0, Python: 0, Java: 0, "C++": 0 };

formEncuesta.addEventListener("submit", (e) => {
e.preventDefault();
errorEncuesta.textContent = "";
resultadoEncuesta.textContent = "";

const seleccionados = [...document.querySelectorAll("input[name='lenguaje']:checked")];
if (seleccionados.length === 0) {
    errorEncuesta.textContent = "Debe seleccionar al menos una opción.";
    return;
}

seleccionados.forEach((chk) => {
    votos[chk.value]++;
});

let resumen = "Resultados:<br>";
for (let [leng, cant] of Object.entries(votos)) {
    resumen += `${leng}: ${cant} votos <br>`;
}

resultadoEncuesta.innerHTML = resumen;
formEncuesta.reset();
});

limpiarEncuesta.addEventListener("click", () => {
resultadoEncuesta.textContent = "";
errorEncuesta.textContent = "";
});
