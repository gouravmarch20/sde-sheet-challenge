/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const myMap = new Map()
  const res = []
  for (val of nums) {
    myMap.has(val) ? myMap.set(val, myMap.get(val) + 1) : myMap.set(val, 1)
  }
    for ([key, val] of myMap.entries()) {
      if (val === 2) {
        res.push(key)
      }
    }
  return res
}
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
