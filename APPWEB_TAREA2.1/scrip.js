document.querySelectorAll('.accept').forEach(btn => {
btn.addEventListener('click', () => {
    alert('Solicitud aceptada');
    btn.parentElement.remove();
});
});

document.querySelectorAll('.reject').forEach(btn => {
btn.addEventListener('click', () => {
    alert('Solicitud rechazada');
    btn.parentElement.remove();
});
});