/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
// * while(i>= 0) ==> case why j need in sum if already all iteration done
var addToArrayForm = function (num, k) {
  const res = []
  let i = num.length - 1
  let carry = 0

  let num1 = k.toString().split('')
  for (let i = 0; i < num1.length; i++) {
    num1[i] = Number(num1[i])
  }
  let j = num1.length - 1

  while (i >= 0 && j >= 0) {
    let sum = num[i] + num1[j] + carry
    carry = Math.trunc(sum / 10)
    sum = sum % 10
    res.push(sum)
    i--
    j--
  }
  while (i >= 0) {
    let sum = num[i] + carry
    carry = Math.trunc(sum / 10)
    sum = sum % 10
    res.push(sum)
    i--
  }
  while (j >= 0) {
    sum = num1[j] + carry
    carry = Math.trunc(sum / 10)
    sum = sum % 10
    res.push(sum)
    j--
  }
  while (carry !== 0) {
    let sum = carry
    carry = Math.trunc(sum / 10)
    sum = sum % 10
    res.push(sum)
  }
  return res.reverse()
}
console.log(addToArrayForm([2, 1, 5], 181))
