const arr = [1, 2, 3, 4];
const result = (arr, i, j) => {
  if (i === Math.floor (arr.length / 2)) {
    return 0;
  }
  [arr[i], arr[j]] = [arr[j], arr[i]];
  result (arr, i + 1, j - 1);
  return arr;
};
console.log (result (arr, 0, arr.length - 1));
// console.log (arr);
