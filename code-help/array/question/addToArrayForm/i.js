/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const res = []
  //  ! number limit exceed mis precison
  const result = Number(num.join('')) + k
  for (const val of String(result)) {
    res.push(Number(val))
  }
  return res
}
