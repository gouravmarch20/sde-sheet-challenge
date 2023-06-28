const arr = [1, 1,0,0];
const sortZeroOne = arr => {
  let s = 0;
  let e = arr.length - 1;
  let p = 0;
  while (s < e) {
    if (arr[s] === 0) {

      p++;
      s++;
    } else {
      [arr[s], arr[e]] = [arr[e], arr[s]];
      e--;
    }
  }
  console.log (arr);
};
sortZeroOne (arr);
