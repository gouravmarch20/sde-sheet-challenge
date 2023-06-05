/**
 * @param {number} n
 * @return {number}
 */
// !failed : no pure logic break on high n values
var bitwiseComplement = function (n) {
  let num = 0
  let revBit = ''
  let count = 0
  while (n !== 0) {
    bitRev = n & 1
    num = Math.pow(10, count) * bitRev + num
    count++
    n >>= 1 // right shift
  }
  console.log(num)
  for (const val of num.toString()) {
    revBit = revBit + String( Number(val) ? 0 : 1)
  }
  revBit = Number(revBit)
  // console.log(revBit)
  let result = 0
  let p1 = 0
  while (revBit > 0) {
    d = revBit % 10
    if (d) {
      result += Math.pow(2, p1)
    }
    revBit = Math.trunc(revBit / 10)
    p1++
  }
  return result
}
console.log(bitwiseComplement(5))
