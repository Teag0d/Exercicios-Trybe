const objTeste = { chave0: 'chave0', chave1: 'chave1', chave2: 'chave2' };

// const getInfo = (obj) => {
//   for (let index in obj) {
//     console.log('dentro: ', index);
//   }
// };

// getInfo(objTeste);
// console.log('fora: ', index);

const getInfo = (obj) => {
  for (var index in obj) {
    console.log('dentro: ', index);
  }
  console.log('dentro função: ', index);
};
getInfo(objTeste);
console.log('fora: ', index);

// const getInfo = (obj) => {
//   for (index in obj) {
//     console.log('dentro: ', index);
//   }
// };
// getInfo(objTeste);
// console.log('fora: ', index);
