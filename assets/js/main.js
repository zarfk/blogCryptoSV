document.addEventListener('DOMContentLoaded', () => {
    // Cargar el contenido de la página
    cargarContenido('menu', 'menu');  
    cargarContenido('main', 'home');
    cargarContenido('footer', 'footer');  
  });

document.addEventListener('click', (e) => {

    e.preventDefault();

    if (e.target.id === 'btn-home') cargarContenido('main', 'home');
    if (e.target.id === 'btn-analisis') cargarContenido('main', 'analisis');
    if (e.target.id === 'btn-btc') cargarContenido('main', 'btc');
    if (e.target.id === 'btn-rin') cargarContenido('main', 'rin');
    if (e.target.id === 'btn-dep') cargarContenido('main', 'dep');
    if (e.target.id === 'btn-niip') cargarContenido('main', 'niip');
    if (e.target.id === 'btn-ipc') cargarContenido('main', 'ipc');
    if (e.target.id === 'btn-pib') cargarContenido('main', 'pib');

    if (e.target.id === 'btn-pdf') print(e.target);
});

function cargarContenido(id, url_prompt){
    let archivo = document.getElementById(id);
  
    // Ruta del archivo HTML de archivo
    const url = `../../features/${url_prompt}/${url_prompt}.html`;
  
    // Cargar el contenido
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Error al cargar el contenido: ${response.statusText}`)
        return response.text();
      })
      .then(html => {
        // Insertar el contenido en el contenedor
        archivo.innerHTML = "";
        archivo.innerHTML = html;
      })
      .catch(error => {
        console.error('Ocurrió un error:', error);
      });
}
  