/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// * limit to 32 bit iteration of numbers
var hammingWeight = function (n) {
  let count = 0
  for (let i = 0; i < 32; i++) {
    if (n & 1) {
      count++
    }
    n >>= 1 // right shift
  }
  return count
}
console.log(hammingWeight(11))
