//* TIME : O((n * m)*(n + m) + (n * m)) ==> some where O(n ^ 3)
const matrix = [[0, 0, 2, 0], [3, 4, 5, 2], [0, 3, 1, 5]];
const makeRow = (m, i) => {
  // ** O(n)
  for (let j = 0; j < m[0].length; j++) {
    //!    if (m[i][j] === 1) {

    if (m[i][j] !== 0) {
      m[i][j] = -1;
    }
  }
};
const makeCol = (m, i) => {
  for (let j = 0; j < m.length; j++) {
    //!    if (m[i][j] === 1) {

    if (m[j][i] !== 0) {
      m[j][i] = -1;
    }
  }
};
const setZeroes = matrix => {
  // ** O(n)
  for (let row = 0; row < matrix.length; row++) {
    // ** O(m)
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {
        makeRow (matrix, row); // ** O(n)
        makeCol (matrix, col); // ** O(m)
      }
    }
  }
  // ** O(m)
  for (let r = 0; r < matrix.length; r++) {
    // ** O(m)
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === -1) {
        matrix[r][c] = 0;
      }
    }
  }

  return matrix;
};
console.log (setZeroes (matrix));
