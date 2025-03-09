document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('¡Formulario enviado exitosamente,gracias por tu conculta y preferirno! 😊');
        form.reset();
    });
});