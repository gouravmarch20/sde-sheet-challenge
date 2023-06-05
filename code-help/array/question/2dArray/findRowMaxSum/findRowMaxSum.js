const arr = [
  [0, 1, 2, 3],
  [10, 11, 12, 13],
  [20, 21, 22, 23],
  [30, 31, 32, 33]
]

const rowWiseSum = (r, c) => {
  let maxSum = Number.MIN_SAFE_INTEGER - 1
  let index = 0

  for (let i = 0; i <= r; i++) {
    let sum = 0
    for (let j = 0; j <= c; j++) {
      sum = sum + arr[i][j]
    }
    if (sum > maxSum) {
      maxSum = sum
      index = i
    }
  }
  return `the max sum is ${maxSum} at ${index}`
}
console.log(rowWiseSum(3, 3))
