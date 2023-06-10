const arr = [
  [1, 2],
  [3, 4],
  [5, 6]
]

const wakeLikeForm = (arr, row, col) => {
  const res = []
  for (let i = 0; i <= col; i++) {
    let tempArr = []
    // odd case => bottom to top
    if (i & 1) {
      for (let j = row; j >= 0; j--) {
        tempArr.push(arr[j][i])
      }
    } else {
      for (let j = 0; j <= row; j++) {
        tempArr.push(arr[j][i])
      }
    }
    res.push(tempArr)
  }
  return res
}
console.log(wakeLikeForm(arr, 2, 1))
