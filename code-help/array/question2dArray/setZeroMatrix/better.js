//* TIME : O((m * n ) + (m * n)) -> 2*m*n
//~ SPACE : O(n) + O(m)

const matrix = [[0, 0, 2, 0], [3, 4, 5, 2], [0, 3, 1, 5]];

const setZeroes = matrix => {
  const rowMarker = [];
  const colMarker = [];
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        //!   m1: 0 marked
        rowMarker[i] = 1;
        colMarker[j] = 1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rowMarker[i] || colMarker[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};
console.log (setZeroes (matrix));
