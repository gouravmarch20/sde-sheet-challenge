const arr = [
  [0, 1, 2, 3],
  [10, 11, 12, 13],
  [20, 21, 22, 23],
  [30, 31, 32, 33]
]

const colWiseSum = (r, c) => {
  for (let i = 0; i <= r; i++) {
    let sum = 0
    for (let j = 0; j <= c; j++) {
      sum = sum + arr[j][i]
    }
    console.log(sum)
  }
}
colWiseSum(3, 3)
