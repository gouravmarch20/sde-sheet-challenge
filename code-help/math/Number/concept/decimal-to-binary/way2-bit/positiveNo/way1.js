
const decimalToBinary = num => {
  let ans = 0
  let n = 0
  while (num !== 0) {
    const bit = num & 1
    ans = bit * Math.pow(10, n) + ans

    n++
    num >>= 1
  }
  return ans
}
console.log(decimalToBinary(9))
// console.log(decimalToBinary('4'))
