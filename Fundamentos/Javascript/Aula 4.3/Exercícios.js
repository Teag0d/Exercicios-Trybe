// ex 1
// const n = 10;
// let resultado = 1;
// for (let i = n; i > 0; i--) {
//   resultado = resultado * i;
// }
// console.log(resultado);

// ex 2
// let word = "tryber";
// let wordReversed = '';
// for (let i = word.length - 1; i >= 0; i--) {
//   wordReversed += word[i];
// }
// console.log(wordReversed);

// ex 3
// let array = ["java", "javascript", "python", "html", "css"];
// let smallestWord = array[0];
// for (let i = 1; i < array.length; i++) {
//   if (smallestWord.length > array[i].length) {
//     smallestWord = array[i];
//   }
// }
// console.log(smallestWord);

// ex 4
// let biggestPrime = 0;
// //primeiro loop roda o numero que vamos analizar
// for (let i = 2; i <= 50; i++) {
//   //criamos a variavel isPrime como true e vamos por ela a prova
//   let isPrime = true;
//   //segundo loop vai rodar o divisor
//   for (let divisor = 2; divisor < i; divisor++) {
//     //se a sobra da divisão for 0 para algum outro numero, não é primo
//     if (i % divisor === 0) {
//       isPrime = false;
//     }
//   }
//   //de volta ao primeiro loop, se isPrime ainda é true, vamos atribuir o valor do numero ao biggestPrime
//   //nossa contagem é crescente então não precisamos nos preocupar com se é maior ou não
//   console.log(isPrime, i);
//   if (isPrime) {
//     biggestPrime = i;
// }
// }
// console.log(biggestPrime);

// bonus 1
// let value = 10
// let output = ''
// for (let i = 0; i < value; i++){
//   output += '*'
// }
// for (let i = 0; i < value; i++) {
// console.log(output);
// }

// // bonus 2
// let value = 5
// let output = ''
// for (let i = 0; i < value; i++) {
//   console.log(output)
//   output += '*'
// }

// bonus 3
