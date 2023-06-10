const nums = [1, 2, 1];
const n = nums.length;
const requiredSum = 2;
const ds = [];
const subarraySum = (ind, ds, sum, reqSum) => {
  if (ind >= nums.length) {
    if (sum === reqSum) {
      //arr.push
      console.log (ds);
    }
    return;
  }
  ds.push (nums[ind]);
  sum += nums[ind];
  subarraySum (ind + 1, ds, sum, reqSum);
  const val = ds.pop ();
  sum -= val;

  subarraySum (ind + 1, ds, sum, reqSum);
};
console.log (subarraySum (0, ds, 0, requiredSum));
