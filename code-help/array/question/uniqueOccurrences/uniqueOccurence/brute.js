/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let mapOfItemCounter = {}
  // let mapOfOccurrences = new Map()

  for (const val of arr) {
    if (map.has(val)) {
      mapOfItemCounter(val, mapOfItemCounter.get(val) + 1)
    } else {
      mapOfItemCounter.set(val, 1)
    }
  }
  for (const val of noOfOccurrence) {
    if (mapOfOccurrences.has(val)) {
      return false
    } else {
      mapOfOccurrences.set(val, true)
    }
  }
  return true
}
// console.log(uniqueOccurrences([1, 1, 7]))
