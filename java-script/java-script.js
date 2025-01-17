document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('contenido-principal');
  
    // Función para cargar contenido dinámico
    function cargarContenido(contentId) {
      let contenido;
      switch (contentId) {
        case 'cartilla':
          contenido = `
            <h2>Cartilla</h2>
            <p>Bienvenido a la página principal.</p>
          `;
          break;

        case 'guardias':
          contenido = `
            <h2>Guardias</h2>
            <p>Aquí puedes gestionar las guardias.</p>
          `;
          break;

        case 'internaciones':
          contenido = `
            <h2>internaciones</h2>
            <p>Visualiza tus internaciones aquí.</p>
          `;
          break;

        case 'consultoriosExternos':
        contenido = `
            <h2>consultoriosExternos</h2>
            <p>Visualiza tus consultoriosExternos aquí.</p>
        `;
        break;

        case 'estudiosYLaboratorios':
            contenido = `
                <h2>estudiosYLaboratorios</h2>
                <p>Visualiza tus estudiosYLaboratorios aquí.</p>
            `;
            break;

        case 'odontologia':
            contenido = `
                <h2>odontologia</h2>
                <p>Visualiza tus odontologia aquí.</p>
            `;
            break;

        case 'farmacias':
            contenido = `
                <h2>farmacias</h2>
                <p>Visualiza tus farmacias aquí.</p>
            `;
            break;   
            
        case 'opticas':
            contenido = `
                <h2>opticas</h2>
                <p>Visualiza tus opticas aquí.</p>
            `;
            break;

        case 'saludMental':
            contenido = `
                <h2>saludMental</h2>
                <p>Visualiza tus saludMental aquí.</p>
            `;
            break;

        default:
          contenido = `
            <h2>Error</h2>
            <p>El contenido solicitado no está disponible.</p>
          `;
      }
      contentArea.innerHTML = contenido;
    }
  
    // Interceptar clics en los enlaces del menú
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const contentId = e.target.dataset.content;
        cargarContenido(contentId);
      });
    });
  });
  