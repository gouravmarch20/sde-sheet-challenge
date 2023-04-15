const arr = [-5, 2, 10, 4, 6];
const findIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
};

console.log(findIndex(arr, 10));
console.log(findIndex(arr, 6));
console.log(findIndex(arr, 20));
