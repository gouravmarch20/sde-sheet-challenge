// const arr = [7, 1, 4, 2, 3]
const arr = [7, 8, 9, 1, 2, 3]
// const arr = [3, 8, 10, 1]
const findPivotInRotatedSortedArr = arr => {
  let s = 0
  let e = arr.length - 1
  let m = 0
  while (s < e) {
    m = Math.floor((s + e) / 2)
    if (arr[m] >= arr[0]) {
      s = m + 1
    } else {
      e = s
    }
  }
  return e
}
console.log(findPivotInRotatedSortedArr(arr))
