/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// !failed
var threeSum = function (nums) {
  const target = 0
  // nums = nums.sort((a, b) => a - b)
  console.log(nums)

  const result = []
  for (let i = 0; i < nums.length; i++) {
    const e1 = nums[i]
    if (e1 > 0) continue
    for (let j = i + 1; j < nums.length; j++) {
      const e2 = nums[j]
      // while (e2 === nums[j + 1]) j++

      for (let k = j + 1; k < nums.length; k++) {
        const e3 = nums[k]

        if (e1 + e2 + e3 === target) {
          result.push([e1, e2, e3])
          while (e3 === nums[k + 1]) k++
        }
      }
      while (e2 === nums[j + 1]) j++
    }
    while (e1 === nums[i + 1]) i++
  }
  return result
}
// console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))
// console.log(threeSum([-4, -1, -1, 0, 1, 2]))
console.log(threeSum([-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4], 0))
