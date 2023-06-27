const findUnion = (arr, arr1) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push (arr[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    res.push (arr1[i]);
  }
  console.log (res);
};
const arr = [1, 3, 9];
const arr1 = [5];
findUnion (arr, arr1);
