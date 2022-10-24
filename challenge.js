// const arr = [1,2,3,4,3,2,1,4,10];

// const arr = [6,8,89,64,6,18,64, 54,54, 89, 81, 18,6,12,12,64,89];

const arr = [
  12, 27, 54, 6, 18, 89, 64, 18, 64, 54, 6, 8, 12, 32, 64, 6, 89, 68, 10, 12,
  68, 10, 2, 32, 18,
];

const countingObj = (arr) => {
  return arr.reduce(
    (acc, currNum) => ({
      ...acc,
      [currNum]: acc[currNum] + 1 || 1,
    }),
    {}
  );
};

const sortingArray = (obj) => {
  return Object.entries(obj).sort(([, a], [, b]) => b - a);
};

const mostRepeated = (arr) => {
  const obj = countingObj(arr);
  // console.log(obj);
  const sortedArray = sortingArray(obj);
  // console.log('2', sortedArray);
  const result = [sortedArray[0][1]];
  sortedArray.map((element) => {
    if (element[1] === sortedArray[0][1]) result.push(element[0]);
  });
  return result;
};
console.log(mostRepeated(arr));

// const obj = arr.reduce(
//   (acc, currNum) => ({
//     ...acc,
//     [currNum]: acc[currNum] + 1 || 1,
//   }),
//   {}
// );

// const sorting = Object.entries(obj)
//   .sort(([,a],[,b]) => b-a)
