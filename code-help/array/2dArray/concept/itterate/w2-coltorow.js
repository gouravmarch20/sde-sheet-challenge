const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

// Get the number of columns in the matrix
const numColumns = matrix[0].length;

// Column-wise iteration
for (let j = 0; j < numColumns; j++) {
  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[j][i];
    // Do something with the element
    console.log (`Column ${j}, Row ${i}: ${element}`);
  }
}
