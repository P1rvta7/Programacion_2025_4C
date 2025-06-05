// Problema 2: Evaluación de Temperatura
function evaluarTemperatura() {
    let temperatura = parseInt(prompt("Ingresa la temperatura en °C:"));

    if (temperatura < 0) {
        console.log("Hace frío");
        alert("Hace frío");
    } else if (temperatura < 25) {
        console.log("La temperatura es agradable");
        alert("La temperatura es agradable");
    } else {
        console.log("Hace calor");
        alert("Hace calor");
    }
}

// Problema 3: Verificación de Usuario y Contraseña
function verificarUsuario() {
    let nombreUsuario = prompt("Nombre de usuario:");
    let contraseña = prompt("Contraseña:");

    if (nombreUsuario === "usuario123" && contraseña === "secreto") {
        console.log("Acceso concedido");
        alert("Acceso concedido");
    } else {
        console.log("Acceso denegado");
        alert("Acceso denegado");
    }
}

// Problema 4: Determinar el Signo de un Número
function determinarSigno() {
    let numero = parseFloat(prompt("Ingresa un número:"));

    if (numero > 0) {
        console.log("El número es positivo");
        alert("El número es positivo");
    } else if (numero < 0) {
        console.log("El número es negativo");
        alert("El número es negativo");
    } else {
        console.log("El número es cero");
        alert("El número es cero");
    }
}

// Problema 5: Evaluación de Puntuación en un Juego
function evaluarPuntuacion() {
    let puntuacion = parseInt(prompt("Ingresa tu puntuación:"));

    if (puntuacion >= 90) {
        console.log("Excelente");
        alert("Excelente");
    } else if (puntuacion >= 70 && puntuacion <= 89) {
        console.log("Buen trabajo");
        alert("Buen trabajo");
    } else {
        console.log("Necesitas mejorar");
        alert("Necesitas mejorar");
    }
}
