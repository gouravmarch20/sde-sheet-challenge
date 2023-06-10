var rotate = function (matrix) {
  const row = matrix.length
  const col = matrix[0].length

  let maxItt = row * col
  let count = 0

  let sr = 0
  let sc = 0
  let ec = row - 1
  let er = col - 1

  let res = []
  let temp = []
  while (count < maxItt) {
    for (let i = er; i >= sr; i--) {
      //
      res.push(matrix[i][sc])
      count++
    }
    sc++
    for (let i = sc; i <= ec && count < maxItt; i++) {
      res.push(matrix[sr][i])
      count++
    }
    sr++
    for (let i = sr; i <= ec && count < maxItt; i++) {
      res.push(matrix[i][ec])
      count++
    }
    ec--
    for (let i = ec; i >= sc && count < maxItt; i--) {
      res.push(matrix[er][i])
      count++
    }
    er--
    //  count++
  }
  //   console.log(res)
  return res
}
// console.log(
//   rotate([
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16]
//   ])
// )
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)
