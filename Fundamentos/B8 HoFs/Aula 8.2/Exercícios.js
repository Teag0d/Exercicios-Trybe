const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const firstBorn1947 = books.find((data) => data.author.birthYear === 1947)
  .author.name;
console.log(firstBorn1947);

const smallerName = (data) => {
  let name;
  data.forEach((element) => {
    if (!name || name < element.name.length) {
      name = element.name;
    }
  });
  return name;
};

console.log(smallerName(books), ' ex2');

const first26Name = (data) =>
  data.find((element) => element.name.length === 26).name;

console.log(first26Name(books), ' ex3');

const orderReleaseOlderToNewer = (data) =>
  data.sort((book1, book2) => book2.releaseYear - book1.releaseYear);
// console.log(orderReleaseOlderToNewer(books));

const everyoneWasBornOnSecXX = (data) =>
  data.every((element) => element.author.birthYear > 1900);
console.log(everyoneWasBornOnSecXX(books));

const someBookWasReleaseOnThe80s = (data) =>
  data.some((element) => element.releaseYear > 1980);

console.log(someBookWasReleaseOnThe80s(books));

const authorUnique = (data) => {
  let result = false;
  data.forEach((element) => {
    let author1Year = element.author.birthYear;
    data.forEach((element2) => {
      if (
        element2.author.birthYear === author1Year &&
        element2.id !== element.id
      ) {
        result = true;
      }
    });
  });
  return result;
};

console.log(authorUnique(books));
