// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// ex1
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// ex 2
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
//   console.log(sum);
// }
// ex 3 e 4
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }
// console.log(sum/numbers.length-1);

// // ex 5
// let biggestNumber = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > biggestNumber) {
//     biggestNumber = numbers[i];
//   }
// }
// console.log(biggestNumber);

//ex 6
// let oddcount = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     oddcount++;
//   }
// }
// console.log(oddcount);

// ex 7
// let smallestNumber = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i];
//   }
// }
// console.log(smallestNumber);

// ex 8 e 9
// let myArray = [];
// for (let i = 1; i <= 25; i++) {
//   myArray.push(i);
// }
// console.log(myArray);
// for (let i = 0; i< myArray.length; i++) {
//   console.log(myArray[i]/2);
// }

// ex bonus 1 e 2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// //crescente
//   for  (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (numbers[i] < numbers[j]){
//         let position = numbers[i]
//         numbers[i] = numbers[j]
//         numbers[j] = position
//       }
//     }
//   }
// console.log(numbers)
// //decrescente
// for  (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (numbers[i] > numbers[j]){
//       let position = numbers[i]
//       numbers[i] = numbers[j]
//       numbers[j] = position
//     }
//   }
// }
// console.log(numbers)

// bonus 3
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newArray = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (i < numbers.length) {
//     newArray.push(numbers[i] * 2);
//   } else {
//     newArray.push(numbers[i] * numbers[i + 1]);
//   }
// }
// console.log(numbers.length);
// console.log(newArray);
