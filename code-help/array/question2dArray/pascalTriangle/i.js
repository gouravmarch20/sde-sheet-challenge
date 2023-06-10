var generate = numRows => {
  const arr = [];

  for (let i = 0; i < numRows; i++) {
    const temp = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        temp.push (1);
      }
      if (j !== 0 && j !== i) {
        const sum = arr[i - 1][j - 1] + arr[i - 1][j];
        temp.push (sum);
      }
      if (j >= 1 && j === i) {
        temp.push (1);
      }
    }
    arr.push (temp);
  }
  //   console.log (arr);
  return arr;
};
console.log (generate (5));
