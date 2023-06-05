const transpose = matrix => {
  const row = matrix.length
  const col = matrix[0].length

  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
      // ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      let temp = matrix[i][j]
      let temp1 = matrix[j][i]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  for (let i = 0; i < row; i++) {
    let k = matrix[i].length - 1

    for (let j = 0; j < Math.floor(col / 2); j++) {
      //
      // ;[matrix[i][j], matrix[i][k]] = [matrix[i][k], matrix[i][j]]
      // k--

      // way 2
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][matrix.length - 1 - j]
      matrix[i][matrix.length - 1 - j] = temp
    }
  }
  return matrix
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)
