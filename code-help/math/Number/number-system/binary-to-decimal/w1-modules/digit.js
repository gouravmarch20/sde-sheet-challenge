const binaryToDecimal = num => {
  let ans = 0
  let n = 0
  while (num !== 0) {
    const digit = num % 10
    if (digit === 1) {
      ans += Math.pow(2, n)
    }

    n++
    num = Math.trunc(num / 10)
  }
  return ans
}
console.log(binaryToDecimal('110'))
 console.log(binaryToDecimal('1111'))
