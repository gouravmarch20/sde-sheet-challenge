const nums = [2, 3, 1];
const ans = [];
const output = [];
const index = 0;

const solve = (nums, output, index, ans) => {
  //
  if (index >= nums.length) {
    ans.push (output.slice ());
    return;
  }
  //ex
  solve (nums, output, index + 1, ans);

  let element = nums[index];
  output.push (element);
  //
  solve (nums, output, index + 1, ans);
  output.pop ();
};
solve (nums, output, index, ans);

console.log (ans);
