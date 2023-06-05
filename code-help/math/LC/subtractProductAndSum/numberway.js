/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let sum = 0
  let product = 1
  while (n !== 0) {
    temp = n % 10
    sum += temp
    product *= Number(temp)

    n = Math.trunc(n / 10)
  }

  return product - sum
}

console.log(subtractProductAndSum(4421))
