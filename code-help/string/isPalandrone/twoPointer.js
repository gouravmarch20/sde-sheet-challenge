/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const n = s.length - 1
  if (n < 1) return true
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (s[i] === s[n - i]) {
    } else {
      return false
    }
  }
  return true
}
console.log(isPalindrome('aba'))
