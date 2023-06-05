const str = '5'
//** formula ==> (10 ^ n + digit rev) * ans
/* 12345
   - 10 ^ 0 * 5 + 0 => 5 + 0 => 5
   - 10 ^ 1 * 4 + 5 => 40 + 5 => 45
   - 10 ^ 2 * 3 + 45 => 300 + 45 => 345

*/
const getNumber = num => {
  let resNum = 0
  let n = 0
  while (num !== 0) {
    temp = num % 10
    resNum = Math.pow(10, n) * temp + resNum
    console.log(resNum)
    num = Math.trunc(num / 10)
    n++
  }
}
getNumber(str)
