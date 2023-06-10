const print2DArr = (row, col) => {
  const arr = []

  for (let i = 0; i <= row; i++) {
    arr[i] = [] // Initialize each row as an empty array
    for (let j = 0; j <= col; j++) {
      arr[i][j] = i * 10 + j
    }
  }
  return arr
}
console.log(print2DArr(3, 3))
