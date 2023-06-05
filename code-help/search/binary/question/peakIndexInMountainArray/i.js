/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let s = 0
  let e = arr.length - 1
  let m = Math.floor(arr.length / 2)
  while (s < e) {
    if (arr[m] < arr[m + 1]) {
      s = m + 1
    } else if (arr[m] > arr[m + 1]) {
      e = m
    } else {
      return m
    }
    m = Math.floor((s + e) / 2)
  }
  return m
}
console.log(peakIndexInMountainArray([0, 1, 0]))
// console.log(peakIndexInMountainArray([0, 2, 1, 0]))
