// timecomplexity : O(log(n))
const isAlphaNumeric = str => {
  let tempStr = ''

  for (const val of str) {
    if (
      (val >= 'a' && val <= 'z') ||
      (val >= 'A' && val <= 'Z') ||
      (val >= '0' && val <= '9')
    ) {
      tempStr += val
    }
  }
  return tempStr
}
const isReqStrPalindrome = str => {
  let j = str.length - 1
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] === str[j]) {
      j--
    } else {
      return false
    }
  }
  return true
}
var isPalindrome = function (s) {
  const reqStr = isAlphaNumeric(s).toLowerCase()
  return isReqStrPalindrome(reqStr)
}
console.log(isPalindrome('ab_A'))
