const arr = [
  [1, 11, 111, 1111],
  [2, 22, 222, 2222],
  [3, 33, 333, 3333]
]

const print2DArr = (row, col) => {
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      console.log(arr[i][j])
    }
  }
}
console.log(print2DArr(2, 3))
