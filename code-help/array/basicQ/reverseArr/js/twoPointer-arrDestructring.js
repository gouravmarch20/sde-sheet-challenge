const reverse = arr => {
  let j = arr.length - 1;
  for (let i = 0; i < Math.floor (arr.length / 2); i++) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j--;
  }
  return arr;
};

console.log (reverse ([1, 2, 3, 4, 5]));
