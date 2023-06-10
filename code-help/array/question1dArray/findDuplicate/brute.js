/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const mapItemCounter = new Map()
  for (let val of nums) {
    mapItemCounter.has(val)
      ? mapItemCounter.set(val, mapItemCounter.get(val) + 1)
      : mapItemCounter.set(val, 1)
  }

  for (let [key , val] of mapItemCounter.entries()) {
    if (val > 1) {
      return key
    }
  }
}
console.log(findDuplicate([3, 1, 3, 4, 2]))
