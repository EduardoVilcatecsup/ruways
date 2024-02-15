document.addEventListener("DOMContentLoaded", function() {
    const logoContainer = document.querySelector('.logo-container');

    // Función para activar la vibración del logo
    function vibrateLogo() {
        logoContainer.classList.add('vibrate');

        // Elimina la clase de vibración después de un breve tiempo
        setTimeout(function() {
            logoContainer.classList.remove('vibrate');
        }, 1000); // Duración de la animación en milisegundos
    }

    // Llama a la función para iniciar la vibración del logo
    setInterval(vibrateLogo, 2000); // Ejecuta la vibración cada 2 segundos
});
