document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
  
    // Ruta del archivo HTML de menu
    const url = '../../features/menu/menu.html';
  
    // Cargar el contenido
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Error al cargar el contenido: ${response.statusText}`)
        return response.text();
      })
      .then(html => {
        // Insertar el contenido en el contenedor
        menu.innerHTML = "";
        menu.innerHTML = html;
      })
      .catch(error => {
        console.error('Ocurrió un error:', error);
      });
  });
  