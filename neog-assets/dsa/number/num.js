// a  number --> kai digit ka sum and product
// m1>> last digit lgic
//  m2>> confusion what / specially when 1 digit left
// m3> for loop  case
// > Math -> ceil && Number -> tofixed
let num = 1234
let sum = 0
let product = 1
for (; num !== 0; ) {
  const tempLastDigit = num % 10
  sum += tempLastDigit
  product *= tempLastDigit
  num = Math.floor(num / 10)
}
console.log(sum)
console.log(product)
