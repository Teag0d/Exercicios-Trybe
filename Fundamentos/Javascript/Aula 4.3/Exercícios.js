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

// // bonus 1
// let value = 5
// let output = ''
// for (let i = 0; i < value; i++){
//   output += '*'
// }
// for (let i = 0; i < value; i++) {
// console.log(output);
// }

// // bonus 2
// let value = 10
// let output = ''
// for (let i = 0; i < value; i++) {
//   console.log(output)
//   output += '*'
// }

// bonus 3
// 3- Agora inverta o lado do triângulo.
// let n = 10;
// let output = "";
// let symbol = "*";
// let espacos = n - 1;
// let insertSymbol = 1
// for (let i = 0; i < n; i++) {
//   for (let j = espacos; j > 0; j--) {
//     output += " ";
//   }
//   for (let s = 0; s < insertSymbol; s+= 1){
//   output += symbol
//   }
//   console.log(output)
//   espacos -= 1
//   insertSymbol += 1
//   output = ''
// }

// bonus 4
// 4- Depois, faça uma pirâmide com n asteriscos de base:
// let n = 10;
// let mid = n / 2;
// let sides = 1;
// let space = n/2;
// let output = "";

// for (let line = 0; line < space; line++) {
//   for (line2= 0; line2 < mid; line2++){
//     output += ' '
//     }
//     for (let column = 0; column < sides; column += 1) {
//       if (column < mid){
//       }
//       output += "*";
//     }
//   sides += 2;
//   console.log(output);
//   output = "";
//   mid -= 1
// }

// //bonus 5
let n = 7;
let mid = n / 2;
let sides = 1;
let space = n / 2;
let output = "";
let noSymbol = 0;

for (let line = 0; line < mid; line++) {
  if (line > 0 && line < mid - 0.5) noSymbol += 1;
  for (line2 = 0; line2 < space; line2++) {
    output += " ";
  }
  for (let column = 0; column < sides; column += 1) {
    if (column === noSymbol && line !== 0 && line !== mid - 0.5) {
      output += " ";
    } else {
      output += "*";
    }
  }

  sides += 2;
  console.log(output);
  output = "";
  space -= 1;
}

// // bonus 6
// let prime = 47
// isPrime = true

// for (let i = 2; i < prime; i++) {
//   if (prime % i === 0){
//     isPrime = false
//   }
// }
// if (isPrime) {
//   console.log(`O numero ${prime}, é primo!`)
// } else {
//   console.log(`O numero ${prime}, não é primo!`)
// }
