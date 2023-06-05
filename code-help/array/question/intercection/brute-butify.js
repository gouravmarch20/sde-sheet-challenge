/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nums1 = [8, 0, 3]

const nums2 = [0, 0]

var intersection = function (nums1, nums2) {
  const result = []
  const num1Set = new Set(nums1)
  const num2Set = new Set(nums2)

  for (var value of num1Set) {
    if (num2Set.has(value)) {
      console.log('--')
      result.push(value)
    }
  }
  return result
}

console.log(intersection(nums1, nums2))
