const arr = [
  [1, 2, 3],
  [4, 5, 6]
]
// col length depend on no of items in arr[0,1,2]
// row length no of item in arr

const wakeLikeForm = (arr, row, col) => {
  for (let i = 0; i <= col; i++) {
    // odd case => bottom to top
    if (i & 1) {
      for (let j = row; j >= 0; j--) {
        console.log(arr[j][i])
      }
    } else {
      for (let j = 0; j <= row; j++) {
        console.log(arr[j][i])
      }
    }
  }
}
console.log(wakeLikeForm(arr, 1, 2))
