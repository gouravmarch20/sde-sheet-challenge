const arr = [
  [0, 1, 2, 3],
  [10, 11, 12, 13],
  [20, 21, 22, 23],
  [30, 31, 32, 33]
]

const rowWiseSum = (r, c) => {
  for (let i = 0; i <= r; i++) {
    let sum = 0
    for (let j = 0; j <= c; j++) {
      sum = sum + arr[i][j]
    }
    console.log(sum);
  }
}
rowWiseSum(3, 3)
