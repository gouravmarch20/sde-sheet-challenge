const arr = [[5, 4, 6], [5, 4], [5, 6], [5], [4, 6], [4], [6], []];

for (const val of arr) {
  let line = '';

  for (const j of val) {
    line += j + ' ';
  }
  console.log (line);
}

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