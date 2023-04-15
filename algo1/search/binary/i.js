const arr = [-5, 2, 4, 6, 10];
const findIndex = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleElement = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleElement]) {
      return middleElement;
    }
    if (target < arr[middleElement]) {
      rightIndex = middleElement - 1;
    } else {
      leftIndex = middleElement + 1;
    }
  }

  return -1;
};

console.log(findIndex(arr, 10));
// console.log(findIndex(arr, 6));
// console.log(findIndex(arr, 20));
