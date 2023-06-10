//! fail in lc ==> making new array ==> Do not return anything, modify matrix in-place instead.
const matrix = [[0, 0, 2, 0], [3, 4, 5, 2], [0, 3, 1, 5]];
const setZeroes = matrix => {
  const newM = [];
  const toSetColZero = [];

  for (let i = 0; i < matrix.length; i++) {
    const temp = [];

    let k = 0;
    let isContainZero = false;
    while (k < matrix[0].length) {
      if (matrix[i][k] === 0) {
        toSetColZero[k] = true;
        isContainZero = true;
      }
      // if()
      k++;
    }

    // const element = matrix[i];
    for (let j = 0; j < matrix[0].length; j++) {
      if (isContainZero) {
        // row set
        temp[j] = 0;
        //col set
      } else {
        temp[j] = matrix[i][j];
      }
    }
    newM.push (temp);
  }
  // console.log (newM);
  for (let row = 0; row < newM.length; row++) {
    for (let col = 0; col < newM[0].length; col++) {
      // newM[j][i] = 0;
      if (toSetColZero[col]) {
        newM[row][col] = 0;
      }
    }
  }

  return newM;
};
console.log (setZeroes (matrix));
