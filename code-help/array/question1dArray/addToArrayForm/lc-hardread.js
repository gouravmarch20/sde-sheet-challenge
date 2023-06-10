/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let num1 = k.toString().split('')
  for (let i = 0; i < num1.length; i++) {
    num1[i] = Number(num1[i])
  }
  console.log(num1, num)
  const res = []
  let i = num.length - 1
  let j = num1.length - 1
  let sum = 0
  let carry = 0
  while (i >= 0 && j >= 0) {
    let sum = (num[i] || 0) + (num1[j] || 0) + carry
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
    sum = (num[i] || 0) + (num1[j] || 0) + carry
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
