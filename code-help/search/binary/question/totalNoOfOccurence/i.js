//  First and Last Position of an Element In Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const findLeftMost = (arr, target) => {
  let res = -1
  let l = 0
  let r = arr.length - 1
  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (arr[m] === target) {
      r = m - 1
      res = m
    } else if (target > arr[m]) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
  return res
}
const findRightMost = (arr, target) => {
  let res = -1
  let l = 0
  let r = arr.length - 1
  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (arr[m] === target) {
      l = m + 1
      res = m
    } else if (target > arr[m]) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
  return res
}
var searchRange = function (nums, target) {
  const arr = []
  //   console.log(findLeftMost(nums, target))
  //   console.log(findRightMost(nums, target))
  arr.push(findLeftMost(nums, target))
  arr.push(findRightMost(nums, target))
  if (arr[0] == -1 && arr[1] === -1) {
    return 0
  } else if (arr[1] === -1) {
    return 1
  } else {
   return arr[1] - arr[0] + 1

  }
  //   console.log(arr)
}
console.log(searchRange([1, 5, 10], 3))
