let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
let target = 23

var searchMatrix = function (matrix, target) {
  const row = matrix.length
  const col = matrix[0].length
  let er = row - 1
  let sr = 0
  let sc = col - 1
  let ec = 0

  while (ec <= sc && sr <= er) {
    e = matrix[sr][sc]
    if (e === target) {
      return true
    } else if (e < target) {
      sr++
    } else if (e > target) {
      sc--
    }
  }
  return false
}
console.log(searchMatrix(matrix, target))
