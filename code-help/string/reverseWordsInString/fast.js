/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const rev = s.split(' ')
  let str = ''
  for (const val of rev) {
    if (val !== '') str += `${val} `
  }
  return str.split(' ').reverse().join(' ').trim()
}
console.log(reverseWords('   a good   example'))
