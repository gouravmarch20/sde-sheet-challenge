const bSearch = num => {
  let s = 0
  let e = num
  let m = 0
  let ans = -1
  while (s <= e) {
    m = Math.floor((s + e) / 2)
    let sq = m * m
    if (sq === num) {
      return m
    } else if (num > sq) {
      ans = m
      s = m + 1
    } else {
      e = m - 1
    }
  }
  return ans
}
// TODO:: DECIMAL FUNCTION FIX
const decimal = (number, precision, find) => {
  let factor = 1
  let ans = number
  for (let i = 0; i < precision; i++) {
   console.log(i);
    factor = factor / 10
    for (let j = ans; j * j < find; j = j + factor) {
      ans = j
    }
  }
  return ans
}
var mySqrtDecimal = function (find) {
  const no = bSearch(find)
  return decimal(no, 3, find)
}
console.log(mySqrtDecimal(7))
