const maxOccur = str => {
  let map = new Map()
  let maxOccurChar = str[0]
  let maxOccurVal = 0

  for (let val of str) {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1)
    } else {
      map.set(val, 1)
    }
  }

  for ([key, val] of map) {
    if (maxOccurVal < val) {
      maxOccurVal = val
      maxOccurChar = key
    }
  }
  return maxOccurChar
}

console.log(maxOccur('testsample'))
