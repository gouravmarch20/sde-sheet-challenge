let matrix = [[1], [3]]

let target = 3
var searchMatrix = function (matrix, target) {
  let row = matrix.length
  let col = matrix[0].length
  let s = 0
  let e = row * col - 1
  let mid = Math.floor((e + s) / 2)
  while (s <= e) {
   // ** imp
    const element = matrix[Math.floor(mid / col)][Math.floor(mid % col)]

    if (element === target) {
      return true
    } else if (element < target) {
      // right side
      s = mid + 1
    } else if (element > target) {
      // left side
      e = mid - 1
    }
    mid = Math.floor((e + s) / 2)
  }
  return false
}

console.log(searchMatrix(matrix, target))
