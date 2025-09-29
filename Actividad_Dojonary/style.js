console.log("page loaded...");

function liked(element) {
    // Selecciona el <span> dentro del botón
    const span = element.querySelector("span");
    let like = parseInt(span.innerText); // convertir texto a número
    like++; // suma 1
    span.innerText = like; // actualiza el número en pantalla
}

function login(element) {
    // Cambia entre Login y Logout
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(element) {
    // Oculta la caja que contiene el botón
    element.parentElement.remove();
}
