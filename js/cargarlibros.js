// Obtener el contenedor donde se insertarán las cartas
const librosLista = document.getElementById('libros-lista');

// Cargar el archivo JSON
fetch('libros.json')
  .then(response => response.json())
  .then(libros => {
    libros.forEach(libro => {
      // Crear la estructura de la carta con Bootstrap usando los datos del JSON
      const card = `
        <div class="col">
          <div class="card h-100">
            <img src="${libro.imagen}" class="card-img-top" alt="${libro.titulo}">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="book-title text-center">${libro.titulo}</h5>
              <div class="d-flex justify-content-between align-items-center">
                <span class="book-genre">${libro.genero}</span>
                <span class="book-price">$${libro.precio}</span>
              </div>
            </div>
          </div>
        </div>
      `;
      // Insertar la carta en el contenedor
      librosLista.innerHTML += card;
    });
  })
  .catch(error => console.error('Error al cargar los libros:', error));
