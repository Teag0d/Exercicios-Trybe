function generatePhoneNumber(array) {
  // seu código aqui
  let count = 0;
  if (array.length > 11 || array.length < 11) {
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }
      if (count >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  return (phoneNumber = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`);
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
