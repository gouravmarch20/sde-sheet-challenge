function solve (nums, output, index, ans) {
  // base case
  if (index >= nums.length) {
    ans.push (output.slice ()); //**  to avoid reference --? shallow copy
    return;
  }

  // exclude
  solve (nums, output, index + 1, ans);

  // include
  
  let element = nums[index];
  output.push (element);
  solve (nums, output, index + 1, ans);

  output.pop (); // Remove the included element for backtracking
}

function subsets (nums) {
  let ans = [];
  let output = [];
  let index = 0;
  solve (nums, output, index, ans);
  return ans;
}

// Example usage:
let nums = [1, 2, 3];
console.log (subsets (nums));
