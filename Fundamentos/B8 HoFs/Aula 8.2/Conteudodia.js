const numbers = [19, 21, 18, 33, 40, 22, 157, 150];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  if (number % 5 === 0 && number % 3 === 0) {
    return true;
  }
  return false;
};

const isDivisibleBy3And5 = numbers.find(findDivisibleBy3And5);
console.log(isDivisibleBy3And5);

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  // Adicione seu código aqui:
  if (name.length === 8) {
    return true;
  }
  return false;
};
const firstFiveLetterName = names.find(findNameWithFiveLetters);
console.log(firstFiveLetterName);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(music) {
  // Adicione seu código aqui
  return music.id === '31031685';
}

const music = musicas.find(findMusic);
console.log(music);
