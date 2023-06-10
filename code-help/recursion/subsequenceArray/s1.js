

function subsets (ind, ds, nums, n) {
  if (ind >= n) {
    console.log (ds);
    return;
  }
  // include
  ds.push (nums[ind]);
  subsets (ind + 1, ds, nums, n);
  ds.pop ();
  // exclude
  subsets (ind + 1, ds, nums, n);
}

// Example usage:
// let nums = [1, 2, 3];
let nums = [5, 4, 6];
const n = nums.length;
let ds = [];
console.log (subsets (0, ds, nums, n));
