const rotate = matrix => {
  const row = matrix.length
  const col = matrix[0].length

  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
        [matrix[j][i]] =  [matrix[i][j]]
      // let temp = matrix[i][j]
      // matrix[i][j] = matrix[j][i]
      // matrix[j][i] = temp
    }
  }
    console.log(matrix)
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)
