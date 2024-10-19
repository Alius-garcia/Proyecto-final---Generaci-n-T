const libros = [
    // Los datos de libros del archivo JSON
    {
"titulo": "Nosotros en la luna",
"autor": "Alice Kellen",
"precio": 19600,
"genero": "Romance",
"editorial": "Planeta",
"imagen": "https://www.planetadelibros.com.ar/usuaris/libros/fotos/311/m_libros/310721_portada_nosotros-en-la-luna_alice-kellen_201911261050.jpg"
},
{
"titulo":"El día que dejó de nevar en Alaska",
"autor":"Alice Kellen",
"precio":30000,
"genero":"Romance",
"editorial":"Planeta",
"imagen":"https://images.cdn3.buscalibre.com/fit-in/360x360/c4/65/c46559631208a5d48261185a89e1f233.jpg"
},
{
"titulo":"33 razones para volver a verte",
"autor":"Alice Kellen",
"precio":29300.00,
"genero":"Romance",
"editorial":"Planeta",
"imagen":"https://images.cdn1.buscalibre.com/fit-in/360x360/0b/fa/0bfa6c3d6036321515abc96b7a5c94b8.jpg"
},
{
"titulo":"Cuando no queden más estrellas que contar",
"autor":"María Maritnez",
"precio":17370,
"genero":"Romance",
"editorial":"Planeta",
"imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQX__4ExWOOJ_5Ldsx7bD36XFv8bB2les13w&s"
},
{
"titulo":"Cazadores de sombras",
"autor":"Cassandra Clane",
"precio":18300.00,
"genero":"Fantasia",
"editorial":"Booket",
"imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjUFcIA5ik6ysfj_YM6RSC4IBFHavKryyFQ&s"
},
{
"titulo":"Cuento de Hadas",
"autor":"Stephen King",
"precio":28900.00,
"genero":"Fantasia",
"editorial":"Plaza & Janés",
"imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvXHrN1GUCj0WBMBG_0YM0NIlUlbQ7e18KA&s"
},
{
"titulo":"Hábitos Atomicos",
"autor":"James Clear",
"precio":20250.00,
"genero":"Autoayuda",
"editorial":"Diana",
"imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzQgLxErF3wojuGjhQ5vCHyG2uuO1WZhTBw&s"
},
{
"titulo":"Heartstopper 5",
"autor":"Alice Oseman",
"precio":17500.00,
"genero":"Ficción",
"editorial":"VRYA",
"imagen":"https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/77408d06-2f58-4379-86ff-065f2ae4d2a4/9786313001002.jpg"
},
{
"titulo":"Las luces de febrero",
"autor":"Joana Marcús",
"precio":32899.99,
"genero":"Ficción",
"editorial":"Montena",
"imagen":"https://www.penguinlibros.com/ar/3746253/las-luces-de-febrero-meses-a-tu-lado-4.jpg"
},
{
"titulo":"Tres Meses",
"autor":"Joana Marcús",
"precio":32899.99,
"genero":"Ficción",
"editorial":"Montena",
"imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1f7kaC25v8dN1a65lUEeNuEKDYtQSSN2FQ&s"
},
{
"titulo":"El principito",
"autor":"Saint-Exupery,Antone de",
"precio":8799.99,
"genero":"Ficción",
"editorial":"Salamandra",
"imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTpwoDBsM9mKzjKSZS7Ke99z1cJboypiPfQ&s"
},
{
"titulo":"Harry Potter 2",
"autor":"Rowling J.K.",
"precio":21999.99,
"genero":"Ficción",
"editorial":"Salamandra",
"imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlj8_Ve7H71gNaArvYD0lGkvKcH80XUAEq_g&s"
},
{
"titulo":"Alas de sangre",
"autor":"Rebecca Yarros",
"precio":32700.00,
"genero":"Ficción",
"editorial":"Planeta",
"imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GV7FTGUAShiSO4aSyvp44yXOvgRtVqUOjw&s"
},
{
"titulo":"Este dolor no es mío",
"autor":"Mark Wolynn",
"precio":29900.00,
"genero":"Autoayuda",
"editorial":"Gaia ediciones",
"imagen":"https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/3ad7d044-93c3-4551-9795-316fb19f1198/4d45102a-465e-45ba-b3cb-d58098610387.jpg"
},
{
"titulo":"Twisted Games",
"autor":"Ana Huang",
"precio":32000,
"genero":"Ficción",
"editorial":"Destino",
"imagen":"https://www.tematika.com/media/catalog/Ilhsa/Imagenes/710111.jpg"
},
{
"titulo":"Heartstopper 3",
"autor":"Alice Oseman",
"precio":17500.00,
"genero":"Ficción",
"editorial":"VRYA",
"imagen":"https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/133f0c0c-a4ab-4155-af90-cdb342153658/9789877476972.jpg"
}
    // Agregar el resto de los libros aquí
];

// Función para mostrar los libros filtrados
function filtrarLibros() {
    const genero = document.getElementById('genero').value;
    const editorial = document.getElementById('editorial').value;
    const precioMin = parseFloat(document.getElementById('precioMin').value) || 0;
    const precioMax = parseFloat(document.getElementById('precioMax').value) || Infinity;

    const librosFiltrados = libros.filter(libro => {
        return (genero === '' || libro.genero === genero) &&
               (editorial === '' || libro.editorial === editorial) &&
               libro.precio >= precioMin &&
               libro.precio <= precioMax;
    });

    mostrarLibros(librosFiltrados);
}

// Función para mostrar los libros
function mostrarLibros(libros) {
    const container = document.getElementById('libros-container');
    container.innerHTML = '';

    libros.forEach(libro => {
        const card = `
            
    <div class="col">
          <div class="card h-100">
              <img src="${libro.imagen}" class="card-img-top" alt="Nosotros en la luna">
              <div class="card-body d-flex flex-column justify-content-between">
                  <h5 class="book-title text-center">${libro.titulo}</h5>
                  <div class="d-flex justify-content-between align-items-center">
                      <span class="book-genre">${libro.genero}</span>
                      <span class="book-price">${libro.precio}</span>
                  </div>
              </div>
          </div>
      </div>
        `
        ;
        
        container.innerHTML += card;
    });
}

// Cargar todos los libros al inicio
window.onload = () => {
    mostrarLibros(libros);
}