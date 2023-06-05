/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let mapOfItemCounter = new Map()
  let setOfOccurrence = new Set()

  for (const val of arr) {
    if (mapOfItemCounter.has(val)) {
      mapOfItemCounter.set(val, mapOfItemCounter.get(val) + 1)
    } else {
      mapOfItemCounter.set(val, 1)
    }
  }
  for (const val of mapOfItemCounter.values()) {
    if (setOfOccurrence.has(val)) {
      return false
    } else {
      setOfOccurrence.add(val)
    }
  }
  return true
}
console.log(uniqueOccurrences([1, 1, 7]))// =>  all occurrences once
console.log(uniqueOccurrences([1, 1, 7, 2]))// 7 , 2 => 1 time occurrences 
