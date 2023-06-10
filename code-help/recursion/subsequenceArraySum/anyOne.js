const nums = [1, 2, 1];
const n = nums.length;
const requiredSum = 2;
const ds = [];
const subarraySum = (ind, ds, sum, reqSum) => {
  if (ind >= nums.length) {
    if (sum === reqSum) {
      //arr.push
      console.log (ds);
      return true;
    }
    return false;
  }
  ds.push (nums[ind]);
  sum += nums[ind];
  if (subarraySum (ind + 1, ds, sum, reqSum) === true) {
    return true;
  }
  const val = ds.pop ();
  sum -= val;

  if (subarraySum (ind + 1, ds, sum, reqSum) === true) {
    return true;
  }
  return false;
};
console.log (subarraySum (0, ds, 0, requiredSum));
