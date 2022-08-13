const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  return (sortedArray = array.sort((a, b) => a - b));

  // Seu código aqui.
};

console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉

const fatorial = (number) => {
  let fatorial = 1;
  for (let i = 1; i <= number; i += 1) {
    fatorial *= i;
  }
  return fatorial;
};

console.log(fatorial(5));

const fatorial2 = (number) =>
  number <= 1 ? 1 : number * fatorial2(number - 1);

console.log(fatorial2(5));

// const longestWord = (array) =>
//   longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
