// Obtener el contenedor donde se insertarán las cartas
const librosLista = document.getElementById('libros-lista');

// Cargar el archivo JSON
fetch('libros.json')
  .then(response => response.json())
  .then(libros => {
    // Crear un contenedor para filas
    let row;

    libros.forEach((libro, index) => {
      // Crear una nueva fila cada 5 libros
      if (index % 5 === 0) {
        row = document.createElement('div');
        row.classList.add('row', 'g-4', 'justify-content-center'); // Usamos la clase para centrar
        librosLista.appendChild(row); // Agregar la fila al contenedor principal
      }

      // Crear la estructura de la carta con Bootstrap usando los datos del JSON
      const card = `
        <div class="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center">
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

      // Insertar la carta dentro de la fila actual
      row.innerHTML += card;
    });
  })
  .catch(error => console.error('Error al cargar los libros:', error));
