/**
 * @param {number} x
 * @return {number}
 */
// ** note why 32 bit check  reverse number --> 789 < 987 => reverse number greater than case need to check

//*  why  Math.pow(2, 31) / 10 ==> 1 step advance check because num = 0 mai stop so last revNo we not able to access
var reverse = function (num) {
  let revNum = 0
  while (num !== 0) {
    //
    if (revNum > Math.pow(2, 31) / 10 || revNum < (Math.pow(-2, 31) - 1) / 10) {
      return 0
    }
    const digit = num % 10
    revNum = 10 * revNum + digit
    num = Math.trunc(num / 10)
  }
  return revNum
}
console.log(reverse(67109))
