// Problema 7: Elegibilidad para un Descuento
function evaluarDescuento() {
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let esEstudiante = confirm("¿Eres estudiante? (Aceptar = Sí, Cancelar = No)");

    if (edad > 60 || esEstudiante) {
        alert("Descuento aplicado");
        console.log("Descuento aplicado");
    } else {
        alert("No tienes descuento");
        console.log("No tienes descuento");
    }
}

// Problema 8: Validación de Usuario y Contraseña con NOT
function validarLogin() {
    let usuario = prompt("Ingresa el nombre de usuario:");
    let contraseña = prompt("Ingresa la contraseña:");

    if (!usuario || !contraseña) {
        alert("Error: Debes ingresar usuario y contraseña");
        console.log("Error: Debes ingresar usuario y contraseña");
    } else {
        alert("Inicio de sesión exitoso");
        console.log("Inicio de sesión exitoso");
    }
}

// Problema 9: Encendido de una Máquina con Condiciones Lógicas
function encenderMaquina() {
    let energiaSuficiente = confirm("¿Hay suficiente energía?");
    let interruptorEncendido = confirm("¿Está el interruptor encendido?");

    if (energiaSuficiente && interruptorEncendido) {
        alert("Máquina encendida");
        console.log("Máquina encendida");
    } else {
        alert("No se puede encender la máquina");
        console.log("No se puede encender la máquina");
    }
}

// Problema 10: Acceso Restringido por Estado de Seguridad
function verificarAcceso() {
    let bloqueado = confirm("¿El usuario está bloqueado?");
    let tieneCredenciales = confirm("¿Tiene credenciales válidas?");

    if (bloqueado || !tieneCredenciales) {
        alert("Acceso denegado");
        console.log("Acceso denegado");
    } else {
        alert("Acceso permitido");
        console.log("Acceso permitido");
    }
}
