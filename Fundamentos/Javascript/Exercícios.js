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

const a = 90;
const b = 50;
const c = 50;

if (a < 0 || b < 0 || c < 0) {
  console.log("error: um dos angulos é negativo e não existe");
} else if (a > 0 && b > 0 && c > 0 && a + b + c <= 180) {
  console.log(true);
} else {
  console.log(false);
}
