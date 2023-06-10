const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

// Get the number of columns in the matrix
const numColumns = matrix[0].length;

// Column-wise iteration
for (let r = 0; r < matrix.length; r++) {
  for (let c = 0; c < numColumns; c++) {
    const element = matrix[r][c];
    // Do something with the element
    console.log (` Row ${r} Column ${c},: ${element}`);
  }
}
