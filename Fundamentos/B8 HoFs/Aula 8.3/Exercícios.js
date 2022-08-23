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
const nameGenreAuthor = (data) =>
  data.map(
    (element) => `${element.name} - ${element.genre} - ${element.author.name}`
  );

// console.log(nameGenreAuthor(books));

const nameAndAgeWhenReleased = (data) =>
  data
    .map((element) => {
      return {
        age: element.releaseYear - element.author.birthYear,
        author: element.author.name,
      };
    })
    .sort((data1, data2) => data1.age - data2.age);

// console.log(nameAndAgeWhenReleased(books));

const filteredFantasyAndSciFy = (data) =>
  data.filter(
    (element) =>
      element.genre === 'Fantasia' || element.genre === 'Ficção Científica'
  );

// console.log(filteredFantasyAndSciFy(books));

const over60YearsSinceRelease = (data) =>
  data
    .filter((element) => 2022 - element.releaseYear > 60)
    .sort((book1, book2) => book1.releaseYear - book2.releaseYear);

// console.log(over60YearsSinceRelease(books));

const fantasyAndScyFyAuthors = (data) =>
  data
    .filter(
      (element) =>
        element.genre === 'Fantasia' || element.genre === 'Ficção Científica'
    )
    .map((element) => element.author.name)
    .sort();

// console.log(fantasyAndScyFyAuthors(books));

const over60YearsBookNames = (data) =>
  data
    .filter((element) => 2022 - element.releaseYear > 60)
    .map((element) => element.name);

// console.log(over60YearsBookNames(books));

const authorWith3DotsOnName = (data) =>
  data.filter(
    (element) =>
      element.author.name[1] === '.' &&
      element.author.name[4] === '.' &&
      element.author.name[7] === '.'
  )[0].author.name;

// const authorWith3DotsOnName = (data) =>
//   data.filter((element) => element.author.name.includes()); //usar REGEX

console.log(authorWith3DotsOnName(books));
