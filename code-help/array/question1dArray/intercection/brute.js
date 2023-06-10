/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nums1 = [8, 0, 3]

const nums2 = [0, 0]
var isIncluded = (arr, val) => {
  return arr.find(item => item === val)
}
var intersection = function (nums1, nums2) {
  const result = []
  nums1 = [...new Set(nums1)]
  for (let i = 0; i < nums1.length; i++) {
    if (isIncluded(nums2 ,nums1[i] ) !== undefined) {
      result.push(nums1[i])
    }
  }
  return result
}
console.log(intersection(nums1, nums2))
