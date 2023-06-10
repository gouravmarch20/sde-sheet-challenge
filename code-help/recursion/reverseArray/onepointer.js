const arr = [1, 2, 3, 4];
// pointer i left , length -1 ==> right point
const result = (arr, i, n) => {
  if (i > Math.floor (n / 2)) {
    return 0;
  }
  [arr[i], arr[n]] = [arr[n], arr[i]];
  result (arr, i + 1, n - 1);
  return arr;
};
console.log (result (arr, 0, arr.length - 1));
// console.log (arr);
