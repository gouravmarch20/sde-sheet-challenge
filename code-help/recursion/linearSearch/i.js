const arr = [1, 18, 44, 7, 33]
const target = 443;
const linearS = (arr, tar, index) => {
  if (index === arr.length) {
    return false;
  }

  if (arr[index] === tar) {
    return index;
  }
  return linearS(arr, tar, index + 1);
};
console.log(linearS(arr, target, 0));
