// Función para cargar contenido desde un archivo HTML
function loadComponent(selector, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
            throw new Error(`Error al cargar ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error(error));
    }
    
    // Cargar el Navbar y el Footer
    document.addEventListener('DOMContentLoaded', () => {
        loadComponent('header', 'navbarJS.html');
        loadComponent('footer', 'footerJS.html');
});

