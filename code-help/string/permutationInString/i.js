/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkEqual = (arr1, arr2) => {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) {
      return 0
    }
  }
  return 1
}
var checkInclusion = function (s1, s2) {
  let count1 = Array(26).fill(0)
  //   s1 char count
  for (let i = 0; i < s1.length; i++) {
    let diff = s1[i].charCodeAt(0) - 'a'.charCodeAt(0)
    count1[diff]++
  }
  //   traverse s2 string in window of s1 length & compare
  let i = 0
  let windowSize = s1.length
  let count2 = Array(26).fill(0)
  // running for first window
  while (i < windowSize && i < s2.length) {
    let diff = s2[i].charCodeAt(0) - 'a'.charCodeAt(0)
    count2[diff]++
    i++
  }
  if (checkEqual(count1, count2)) return true
  //   next window
  while (i < s2.length) {
    let newChar = s2[i]
    let index = newChar.charCodeAt(0) - 'a'.charCodeAt(0)
    count2[index]++
    let oldChar = s2[i - windowSize]
    index = oldChar.charCodeAt(0) - 'a'.charCodeAt(0)
    count2[index]--
    i++
    if (checkEqual(count1, count2)) return true
  }

}
console.log(checkInclusion('daabcbaabcbc', 'abc'))
