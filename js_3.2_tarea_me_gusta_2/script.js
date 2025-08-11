// Capturar todos los botones con clase 'like-btn'
const likeButtons = document.querySelectorAll('.like-btn');

// Agregar el evento a cada botón
likeButtons.forEach(button => {
button.addEventListener('click', () => {
    // Obtener el span de likes asociado al botón
    const likeCount = button.parentElement.querySelector('.likes');

    // Convertir a número, sumar 1 y actualizar el texto
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = count + 1;
});
});