// Datos de ejemplo de libros
const books = [
    { title: "El Principito", author: "Antoine de Saint-Exupéry", genre: "Ficción", price: "$1999,99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTpwoDBsM9mKzjKSZS7Ke99z1cJboypiPfQ&s" },
    { title: "El dia que dejo de nevar en Alaska", author: "Alice Kellen", genre: "Romance", price: "$1999,99", imageUrl: "https://images.cdn3.buscalibre.com/fit-in/360x360/c4/65/c46559631208a5d48261185a89e1f233.jpg" },
    { title: "1984", author: "George Orwell", genre: "Ficción", price: "$1999,99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETbLBwup16ovrvFd19bLDLFN23EBf-9SCtQ&s" },
    { title: "Breves respuestas a las grandes preguntas", author: "Stephen Hawking", genre: "Ciencia", price: "$2299,99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYcDCoIMTykyUyKyKY-Z3HPl1Xm00ByfWvA&s" },
    { title: "33 razones para volver a verte", author: "Alice Kellen", genre: "Romance", price: "$2499,99", imageUrl: "https://images.cdn1.buscalibre.com/fit-in/360x360/0b/fa/0bfa6c3d6036321515abc96b7a5c94b8.jpg" },
    { title: "Nosotros en la luna", author: "Alice Kellen", genre: "Romance", price: "$2499,99", imageUrl: "https://www.planetadelibros.com.ar/usuaris/libros/fotos/311/m_libros/310721_portada_nosotros-en-la-luna_alice-kellen_201911261050.jpg" },
    { title: "Cuando no queden más estrellas que contar", author: "María Martínez", genre: "Romance", price: "$2499,99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQX__4ExWOOJ_5Ldsx7bD36XFv8bB2les13w&s" },
    { title: "Casadores de sombras", author: "Cassandra Clare", genre: "Fantasia", price: "$2499,99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjUFcIA5ik6ysfj_YM6RSC4IBFHavKryyFQ&s" },
    { title: "Cuento de Hadas", author: "Stephen King", genre: "Fantasia", price: "$2499,99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvXHrN1GUCj0WBMBG_0YM0NIlUlbQ7e18KA&s" },
    { title: "Hábitos Atómicos", author: "James Clear", genre: "Autoayuda", price: "$2499,99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzQgLxErF3wojuGjhQ5vCHyG2uuO1WZhTBw&s" },
    { title: "Heartstopper 5", author: "Alice Oseman", genre: "Romance", price: "$2499,99", imageUrl: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/77408d06-2f58-4379-86ff-065f2ae4d2a4/9786313001002.jpg" },
    { title: "Las luces de febreo", author: "Joana Marcús", genre: "Romance", price: "$2499,99", imageUrl: "https://www.penguinlibros.com/ar/3746253/las-luces-de-febrero-meses-a-tu-lado-4.jpg" },
    { title: "Tres Meses", author: "Joana Marcús", genre: "Romance", price: "$2499,99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1f7kaC25v8dN1a65lUEeNuEKDYtQSSN2FQ&s" },
    { title: "El principito", author: "Antoine de Saint-Exupéry", genre: "Ficcion", price: "$2499,99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTpwoDBsM9mKzjKSZS7Ke99z1cJboypiPfQ&s" },
    { title: "Harry Potter 2", author: "J. K. Rowling", genre: "Ficcion", price: "$2499,99", imageUrl: "https://www.planetadelibros.com.ar/usuaris/libros/fotos/311/m_libros/310721_portada_nosotros-en-la-luna_alice-kellen_201911261050.jpg" },
    { title: "Alas de sangre", author: "Rebecca Yarros", genre: "Ficcion", price: "$2499,99", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GV7FTGUAShiSO4aSyvp44yXOvgRtVqUOjw&s" },
    { title: "Este dolor no es mio", author: "Mark Wolynn", genre: "Romance", price: "$2499,99", imageUrl: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/3ad7d044-93c3-4551-9795-316fb19f1198/4d45102a-465e-45ba-b3cb-d58098610387.jpg" },
    { title: "Twisted 2", author: "Ana Huang", genre: "Romance", price: "$2499,99", imageUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/710111.jpg" },

];

// Función para mostrar los libros en formato de tarjeta
function displayBooks(filteredBooks) {
    const bookList = document.querySelector("#book-list .row");
    bookList.innerHTML = ""; // Limpiar la lista actual

    filteredBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "col";

        // Contenido de la tarjeta con las mismas clases y estructura que en el index
        bookDiv.innerHTML = `
            <div class="card h-100">
                <img src="${book.imageUrl}" class="card-img-top" alt="${book.title}">
                <div class="card-body text-center">
                    <p class="book-title">${book.title}</p>
                    <p class="book-genre">${book.genre}</p>
                    <p class="book-price">${book.price}</p>
                </div>
            </div>
        `;
        
        bookList.appendChild(bookDiv);
    });
}

// Función para filtrar libros
function filterBooks() {
    const titleFilter = document.getElementById("filter-title").value.toLowerCase();
    const authorFilter = document.getElementById("filter-author").value.toLowerCase();
    const genreFilter = document.getElementById("filter-genre").value;

    const filteredBooks = books.filter(book => {
        return (
            (book.title.toLowerCase().includes(titleFilter) || titleFilter === "") &&
            (book.author.toLowerCase().includes(authorFilter) || authorFilter === "") &&
            (book.genre === genreFilter || genreFilter === "")
        );
    });

    displayBooks(filteredBooks);
}

// Mostrar todos los libros al cargar la página
window.onload = () => displayBooks(books);
