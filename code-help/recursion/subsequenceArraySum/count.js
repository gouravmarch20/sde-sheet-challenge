const nums = [1, 2, 1];
const n = nums.length;
const requiredSum = 2;
const subarraySum = (ind, sum, reqSum) => {
  if (ind >= nums.length) {
    if (sum === reqSum) {
      return 1;
    }
    return 0;
  }

  sum += nums[ind];
  let l = subarraySum (ind + 1, sum, reqSum);
  sum -= nums[ind];

  let r = subarraySum (ind + 1, sum, reqSum);
  return l + r;
};
console.log (subarraySum (0, 0, requiredSum));
