// const order = {
//   name: "Rafael Andrade",
//   phoneNumber: "11-98763-1416",
//   address: {
//     street: "Rua das Flores",
//     number: "389",
//     apartment: "701",
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       },
//     },
//     drinks: {
//       coke: {
//         type: "Coca-Cola Zero",
//         price: 10,
//         amount: 1,
//       },
//     },
//     delivery: {
//       deliveryPerson: "Ana Silveira",
//       price: 5,
//     },
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   const customer = order.name;
//   const cellPhone = order.phoneNumber;
//   const adress = order.address;
//   const deliveryPerson = order.order.delivery.deliveryPerson;
//   console.log(
//     `Olá ${deliveryPerson}, entrega para: ${customer}, Telefone ${cellPhone}, ${adress.street}, Num: ${adress.number}, AP: ${adress.apartment}`
//   );
// };

// customerInfo(order);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
//   const newBuyer = (order.name = "Thiago");
//   const pizzas = Object.keys(order.order.pizza);
// };

// orderModifier(order);

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addNightShift = (obj) => {
  obj.turno = "noite";
};

addNightShift(lesson2);

const showObjKeys = (obj) => {
  console.log(Object.keys(obj));
};

showObjKeys(lesson1);

const showObjValues = (obj) => {
  console.log(Object.values(obj));
};

showObjValues(lesson1);

let allClasses = {};
const groupAll = () => {
  allClasses = Object.assign({}, { lesson1, lesson2, lesson3 });
  return allClasses;
};

groupAll();
console.log(allClasses);

const sumOfStudents = (obj) => {
  let result = 0;
  const array = Object.keys(obj);
  for (let index in array) {
    result += obj[array[index]].numeroEstudantes;
  }
  return result;
};

console.log(sumOfStudents(allClasses));

const getValueByNumber = (obj, position) => {
  const keys = Object.keys(obj);
  const key = keys[position];
  const value = obj[key];
  return value;
};

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  if (keys.includes(key) && values.includes(value)) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === key && values[i] === value) {
        return true;
      }
    }
  }
  return false;
};

console.log(verifyPair(lesson3, "turno", "noite"));
console.log(verifyPair(lesson3, "materia", "Maria Clara"));

// 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
// 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const countMathStudents = (obj) => {
  let keys = Object.keys(obj);
  result = 0;
  for (let i in keys) {
    if (obj[keys[i]].materia === "Matemática") {
      result += obj[keys[i]].numeroEstudantes;
    }
  }
  return result;
};

countMathStudents(allClasses);
console.log(countMathStudents(allClasses));
// console.log(index, i); // pq index ta vazando escopo? estava vazando escopo por falta do let antes do index

const createReport = (obj, value) => {};

// console.log(createReport(allLessons, "Maria Clara"));
