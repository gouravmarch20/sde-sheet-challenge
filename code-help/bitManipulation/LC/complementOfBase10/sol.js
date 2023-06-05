/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  let copyN = n
  let mask = 0
  if (n === 0) return 1
  while (copyN !== 0) {
    mask = (mask << 1) | 1
    copyN = copyN >> 1
  }
  console.log(~n , mask);
  return ~n & mask
}
console.log(bitwiseComplement(5))
