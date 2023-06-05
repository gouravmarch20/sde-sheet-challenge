/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const arrN = n.toString().split('')
  let sum = 0
  let product = 1
  for (let i = 0; i < arrN.length; i++) {
    sum += Number(arrN[i])
    product *= arrN[i]
  }
  return product - sum
}

console.log(subtractProductAndSum(4421))
