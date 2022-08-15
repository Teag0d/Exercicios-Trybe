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

const longestWord = (string) => {
  const array = string.split(" ");
  let result = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > result.length) {
      result = array[i];
    }
  }
  return result;
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);

const subX = (str) => {
  return `Tryber ${str} aqui!`;
};

console.log(subX("Thiago"));

const skills = ["HTML", "CSS", "JS", "TS", "JEST"];
const mySkills = (subX, array) => {
  const randomNumber = () => Math.floor(Math.random() * array.length);
  return `${subX}
  \nMinhas três principais habilidades são:
  \n${array[randomNumber()]}
  \n${array[randomNumber()]}
  \n${array[randomNumber()]}`;
};

console.log(mySkills(subX("Thiago"), skills));
