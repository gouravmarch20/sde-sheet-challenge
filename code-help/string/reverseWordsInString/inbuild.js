/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let n = s.length
  let resStr = ''
  let tempWord = ''
  for (let i = 0; i < n; i++) {
    if (s[i] !== ' ') {
      tempWord += s[i]
    }
    if (s[i] === ' ') {
      while (s[i] === ' ') i++
      i--
      resStr = tempWord + ' ' + resStr
      tempWord = ''
    }
  }
  resStr = tempWord + ' ' + resStr
  return resStr.trim()
}
console.log(reverseWords('the sky is blue'))
// console.log(reverseWords('good example'))
