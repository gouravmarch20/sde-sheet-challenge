//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,

const makeRequiredString = str => {
  let tempStr = ''

  for (const val of str) {
    const asciiVal = val.charCodeAt(0)

    //  lower case
    if (asciiVal >= 97 && asciiVal <= 122) {
      tempStr += val
    } else if (asciiVal >= 65 && asciiVal <= 90) {
      tempStr += val.toLowerCase()
    } else if (asciiVal >= 48 && asciiVal <= 57) {
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
  const reqStr = makeRequiredString(s)
  return isReqStrPalindrome(reqStr)
}
console.log(isPalindrome('ab_a'))
