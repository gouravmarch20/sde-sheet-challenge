/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// !  question : return all pair possible

var twoSum = function (nums, target) {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    const e1 = nums[i]
    for (let j = i; j < nums.length; j++) {
      const e2 = nums[j]
      if (e1 + e2 === target) {
        res.push([e1, e2])
      }
    }
  }
  return res
}
console.log(twoSum([1, 2, 3, 4, 5], 5))
