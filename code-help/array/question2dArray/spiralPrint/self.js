const spiralPrint = matrix => {
  let row = matrix.length
  let col = matrix[0].length
  let count = 0
  let total = row * col

  // pointing vertex
  let startRow = 0
  let startCol = 0
  let endRow = row - 1
  let endCol = row - 1
  let res = []
  while (count < total) {
    // start row 
    for (let i = startCol; i <= endCol && count < total; i++) {
      res.push(matrix[startRow][i])
      count++
    }
    startRow++
    // ending col
    for (let i = startRow; i <= endRow && count < total; i++) {
      res.push(matrix[i][endCol])
      count++
    }
    endCol--

    // end row
    //! issue
    for (let i = endCol; i >= startCol && count < total; i--) {
      res.push(matrix[endRow][i])
      count++
    }
    endRow--
    // start col
    for (let i = endRow; i >= startRow && count < total; i--) {
      res.push(matrix[i][startCol])
      count++
    }
    startCol++
  }
  return res
}

console.log(
  spiralPrint([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ])
)
