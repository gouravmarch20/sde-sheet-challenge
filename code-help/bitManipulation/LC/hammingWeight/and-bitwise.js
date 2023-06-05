/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// ! if 32 bit pc 
var hammingWeight = function (n) {
  let count = 0
  while (n !== 0) {
   console.log(n);
    if (n & 1) {
      count++
    }
    n = n >> 1
  }
  return count
}

console.log(hammingWeight(11))
