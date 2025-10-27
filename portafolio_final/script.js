// ======== EVENTOS ONMOUSEOVER Y ONMOUSEOUT ========
function resaltar(elemento) {
elemento.style.transform = "scale(1.05)";
elemento.style.transition = "0.3s";
elemento.style.backgroundColor = "#eaf2ff";
}

function restaurar(elemento) {
elemento.style.transform = "scale(1)";
elemento.style.backgroundColor = "transparent";
}

// ======== ONCLICK PARA ABRIR PROYECTOS ========
function abrirProyecto(elemento) {
const url = elemento.getAttribute("data-url");
window.open(url, "_blank");
}

// ======== ONCHANGE PARA CAPTURAR DATOS ========
function capturar(input) {
console.log(`Valor modificado: ${input.value}`);
}

// ======== ONCLICK FORMULARIO ========
function enviarFormulario(boton) {
boton.innerText = "Enviado ✅";
boton.disabled = true;
boton.style.backgroundColor = "green";
alert("Formulario enviado correctamente");
}
