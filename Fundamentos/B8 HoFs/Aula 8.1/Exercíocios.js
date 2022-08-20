const newEmployees = () => {
  const employees = {
    id1: createEmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createEmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createEmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const createEmployees = (fullName) => {
  const nameArray = fullName.split(' ');
  const email = `${nameArray.join('_')}@trybe.com`;
  const obj = { name: fullName, email: email };
  return obj;
};

console.log(newEmployees());

const sortingNumber = () => {
  const result = Math.ceil(Math.random() * 5);
  return result;
};

const giveawayResult = (bet) => {
  if (sortingNumber() === bet) {
    return `Parabéns você Ganhou!`;
  }
  return 'Tente novamente!';
};

console.log(giveawayResult(5));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (a, b) => {
  let score = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (b[i] === 'N.A') {
      score = score;
    } else if (a[i] === b[i]) {
      score += 1;
    } else {
      score -= 0.5;
    }
  }
  return score;
};

const pointsMade = (answers, test, compare) => {
  return `Your score is: ${compare(answers, test)}`;
};

console.log(pointsMade(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));
