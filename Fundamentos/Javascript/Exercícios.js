// const a = 5;
// const b = 8;
// const c = 10;

// const sum = a + b;
// const subtract = a - b;
// const multiply = a * b;
// const divide = a / b;
// const mod = a % b;

// console.log(sum, subtract, multiply, divide, mod);

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// if (a > 0) {
//   console.log("positive");
// } else if (a < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }

// const a = 90;
// const b = 50;
// const c = 50;

// if (a < 0 || b < 0 || c < 0) {
//   console.log("error: um dos angulos é negativo e não existe");
// } else if (a > 0 && b > 0 && c > 0 && a + b + c <= 180) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const inputUser = "Pawn";
// chessPiece = inputUser.toLowerCase();

// if (chessPiece === "pawn") {
//   console.log("Moves forward");
// } else if (chessPiece === "tower") {
//   console.log("Moves in straight lines");
// } else if (chessPiece === "knight") {
//   console.log("Moves in L shapes");
// } else if (chessPiece === "bishop") {
//   console.log("Moves in diagonals");
// } else if (chessPiece === "queen") {
//   console.log("Moves in all directions");
// } else if (chessPiece === "king") {
//   console.log("Moves in all directions, but only 1 house");
// } else {
//   console.log("This is not a chess piece!");
// }

// const score = ;
// let scoreConverted;

// if (score < 50) {
//   scoreConverted = "F";
// } else if (score >= 50 && score < 60) {
//   scoreConverted = "E";
// } else if (score >= 60 && score < 70) {
//   scoreConverted = "D";
// } else if (score >= 70 && score < 80) {
//   scoreConverted = "C";
// } else if (score >= 80 && score < 90) {
//   scoreConverted = "B";
// } else if (score >= 90) {
//   scoreConverted = "A";
// }
// console.log(scoreConverted);

// ex 8 & 9
// const isEven1 = 8;
// const isEven2 = ;
// const isEven3 = 10;
// is even
// if (isEven1 % 2 == 0 || isEven2 % 2 == 0 || isEven3 % 2 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// is odd
// if (isEven1 % 2 !== 0 || isEven2 % 2 !== 0 || isEven3 % 2 !== 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }

// ex10
// const cost = 100
// const sell = 150
// const tax = 0.2
// const earnings = sell -(cost * tax)
// const amountSold = 1000
// const totalEarnings = earnings * amountSold
// console.log(totalEarnings)

// ex 11
const salaryBrute = 10000;
let taxIr;
let taxInss;

if (salaryBrute <= 1556.94) {
  taxInss = salaryBrute * 0.08;
} else if (salaryBrute >= 1556.95 && salaryBrute <= 2594.92) {
  taxInss = salaryBrute * 0.09;
} else if (salaryBrute >= 2594.93 && salaryBrute <= 5189.82) {
  taxInss = salaryBrute * 0.11;
} else if (salaryBrute >= 5189.82) {
  taxInss = 570.88;
}
console.log(taxInss);
const salaryBase = salaryBrute - taxInss;

if (salaryBase <= 1903.98) {
  taxIr = 0;
} else if (salaryBase <= 2826.65) {
  taxIr = salaryBase * 0.075 - 142.8;
} else if (salaryBase <= 3751.05) {
  taxIr = salaryBase * 0.15 - 354.8;
} else if (salaryBase <= 4664.68) {
  taxIr = salaryBase * 0.225 - 636.13;
} else if (salaryBase > 4664.68) {
  (taxIr = salaryBase * 0.275 - 869), 36;
}
console.log(taxIr);
const finalSalary = salaryBase - taxIr;
console.log(salaryBase);
