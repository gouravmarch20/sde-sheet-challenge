// if set bit 1 -> is 1 then 2 power mai exit
// 2 pow 7 => contains 1 only once at 7th index
var isPowerOfTwo = function (n) {
  let setBitCounter = 0
  while (n !== 0) {
    bit = n & 1
    console.log(bit)
    n = n >> 1
    if (bit) {
      setBitCounter++
    }
    if (setBitCounter >= 2) {
      return false
    }
  }
  return true
}
console.log(isPowerOfTwo(8))
