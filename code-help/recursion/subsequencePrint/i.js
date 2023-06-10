// time : 2n + n
// space : n
function subsets (ind, ds, nums, n) {
  let line = '';
  if (ind >= n) {
    for (const j of ds) {
      line += j + ' ';
    }
    console.log (line === '' ? '-' : line);
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
let nums = [1, 2, 3];
// let nums = [3, 5];
const n = nums.length;
let ds = [];
subsets (0, ds, nums, n);
