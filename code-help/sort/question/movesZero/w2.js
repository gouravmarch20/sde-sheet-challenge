/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroPoint = 0
  let i = 0
  for (; i < nums.length; i++) {
    if (nums[i] !== 0) {
      //
      ;[nums[zeroPoint], nums[i]] = [nums[i], nums[zeroPoint]]
      zeroPoint++
    }
  }

  return nums
}
console.log(moveZeroes([0]))
