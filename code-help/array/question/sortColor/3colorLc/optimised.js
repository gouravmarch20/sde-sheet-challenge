//
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let l = 0
  let r = nums.length - 1
  let zeroPointer = 0
  while (l < r) {
   //  console.log(`step ${l}`, nums)
    if (nums[l] === 0) {
      ;[nums[zeroPointer], nums[l]] = [nums[l], nums[zeroPointer]]
      zeroPointer++
      l++
    } else if (nums[l] === 1) {
      l++
    } else if (nums[l] === 2) {
      ;[nums[l], nums[r]] = [nums[r], nums[l]]
      r--
    }
  }
  return nums
}
console.log(sortColors([2, 0, 1]))
