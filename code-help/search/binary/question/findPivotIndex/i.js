/**
 * @param {number[]} nums
 * @return {number}
 */
const leftSum = (startIndex, [...nums]) => {
  return nums.slice(0, startIndex).reduce((acc, curr) => acc + curr, 0)
}
const rightSum = (startIndex, [...nums]) => {
  return nums.slice(startIndex + 1).reduce((acc, curr) => acc + curr, 0)
}
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (leftSum(i, nums) === rightSum(i, nums)) return rightSum(i, nums)
  }
  return -1
}

console.log(pivotIndex([2, 1, -1]))
