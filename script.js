document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('compartir').addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href
            }).then(() => {
                console.log('Página compartida con éxito.');
            }).catch(error => {
                console.error('Error al compartir la página:', error);
            });
        } else {
            console.log('La API de compartir no está soportada en este navegador.');
        }
    });
});

