/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, num1) {
  const res = []
  let i = num.length - 1
  let j = num1.length - 1
  //   console.log(i ,j);
  let sum = 0
  let carry = 0
  while (i >= 0 && j >= 0) {
    sum = num[i] + num1[j] + carry
    carry = Math.trunc(sum / 10)
    sum = sum % 10
    res.push(sum)
    i--
    j--
  }
  //   console.log(i, j)
  while (i >= 0) {
    console.log(num[i])
    sum = num[i] + carry
    carry = Math.trunc(sum / 10)
    sum = sum % 10
    res.push(sum)
    i--
  }
    while (j >= 0) {
      sum = num[i] + num1[j] + carry
      carry = Math.trunc(sum / 10)
      sum = sum % 10
      res.push(sum)
      i--
    }
   while(carry !== 0){
      sum = carry % 10
      carry =  Math.trunc(sum / 10)
      res.push(sum)
 
   }
  console.log(res.reverse())
  return res
}
console.log(addToArrayForm([9, 9, 9, 11, 7], [9, 1, 1]))
