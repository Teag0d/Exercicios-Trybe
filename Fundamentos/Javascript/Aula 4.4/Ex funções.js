//ex 1

// function isPalindromo(palavra) {
//   let reverse = ''
//   for (let i = palavra.length -1; i >= 0 ; i--){  //pq tem que ser palavra.length -1? e >=
//     reverse += palavra[i]
//   }
//   console.log(reverse)
//   if (reverse === palavra){
//     return true
//   } return false
// }

// console.log(isPalindromo('arara'))

// // ex 2
// function biggestValue(array) {
//   let biggestValue = array[0]; //como declarar o valor dela?
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > biggestValue) {
//       biggestValue = i;
//     }
//   }
//   return biggestValue;
// }

// console.log(biggestValue([2, 3, 6, 7, 10, 1]));

//ex 3
// function lowestValue(array) {
//   let smallestValue = array[0]; //como declarar o valor dela?
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < smallestValue) {
//       smallestValue = i;
//     }
//   }
//   return smallestValue;
// }

// console.log(lowestValue([2, 3, 6, 7, 10, 1]));

// //ex 4
// function biggestChar(array){
//   let mostChar = ''
//   for (let i = 0; i< array.length; i++){
//     if (array[i].length > mostChar.length){
//       mostChar = array[i];
//     }
//   }return mostChar
// }

// console.log(biggestChar(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// ex 5
// function mostAppreances(array){
//   for (let i = 0; i < array.length; i+= 1){

//   }
// }

//ex 6
// function sum(number){
//   let sum = 0
//   for (let i = 0; i <= number; i+= 1){
//     sum += i
//   } return sum
// }
// console.log(sum(5))

// ex 7
// function verifyEnding(word, end) {
//   let verify = false;
//   let wordToVerify = "";
//   for (let i = word.length - end.length; i < word.length; i++) {
//     wordToVerify += word[i];
//     console.log(wordToVerify);
//     if (wordToVerify === end) {
//       verify = true;
//     } else {
//       verify = false;
//     }
//   }
//   return verify;
// }
// console.log(verifyEnding("Thiago Durante", "te"));
