/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// find pivot >>     if not pivot find return last item index
const findPivotInRotatedSortedArr = arr => {
  let s = 0
  let e = arr.length - 1
  let m

  while (s < e) {
    m = Math.floor((s + e) / 2)
    if (arr[m] >= arr[0]) {
      s = m + 1
    } else {
      e = m
    }
  }
  return s
}
const binarySearch = (arr, searchVal, startIndex, endIndex) => {
  let s = startIndex
  let e = endIndex
  let m = 0

  while (s <= e) {
    m = Math.floor((s + e) / 2)

    if (arr[m] === searchVal) {
      return m
    } else if (searchVal > arr[m]) {
      s = m + 1
    } else {
      e = m - 1
    }
  }
  return -1
}
var search = function (nums, target) {
  const pivot = findPivotInRotatedSortedArr(nums)
  if (target >= nums[pivot] && target <= nums[nums.length - 1]) {
    return binarySearch(nums, target, pivot, nums.length - 1)
  } else {
    return binarySearch(nums, target, 0, pivot - 1)
  }
}
console.log(search([1], 0))
