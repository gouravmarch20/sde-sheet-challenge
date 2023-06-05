const s = 'daabcbaabcbc'
const part = 'abc'
var removeOccurrences = function (s, part) {
  while (1) {
    var fin = s.replace(part, '')
    if (fin == s) {
      return fin
    }
    s = fin
  }
}

console.log(removeOccurrences(s, part))
