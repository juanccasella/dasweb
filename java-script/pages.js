document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll('.nav-link');
    const contenido = document.getElementById('contenido');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();

            const ruta = enlace.getAttribute('href');

            contenido.innerHTML = '<p>Cargando...</p>';

            fetch(ruta)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error al cargar ${ruta}: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(data => {
                    contenido.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error al cargar el contenido:', error);
                    contenido.innerHTML = '<p>Error al cargar el contenido. Intenta nuevamente.</p>';
                });
        });
    });
});
