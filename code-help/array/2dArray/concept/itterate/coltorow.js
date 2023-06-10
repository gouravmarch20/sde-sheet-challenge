const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

// Get the number of columns in the matrix
const numColumns = matrix[0].length;

// Column-wise iteration
for (let col = 0; col < numColumns; col++) {
  for (let row = 0; row < matrix.length; row++) {
    const element = matrix[row][col];
    // Do something with the element
    console.log(`Column ${col}, Row ${row}: ${element}`);
  }
}
