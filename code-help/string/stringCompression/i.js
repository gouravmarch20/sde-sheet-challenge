/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0
  let ansIndex = 0
  let n = chars.length
  while (i < n) {
    let j = i + 1
    while (j < n && chars[i] === chars[j]) {
      j++
    }
   //  old
    chars[ansIndex++] = chars[i]
    let count = j - i
    if (count > 1) {
      // convert counting into single digit & saving
      for (const val of String(count)) {
        chars[ansIndex++] = val
      }
    }
    i = j
  }
  console.log(chars);
  return ansIndex
}
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']))
