/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const n = nums.length;
  const result = [];
  for (i = 0; i < 1 << n; i++) {
    let temp = [];
    for (j = 0; j < n; j++) {
      // if (j & i) {// ! m1 ==> 0 , 1 , 2 binary value needed 1 , 2 , 4
      const t1 = i;
      const t2 = j;
      const t3 = 1 << j;
      const t4 = i & (1 << j);
      if (i & (1 << j)) {
        temp.push (nums[j]); //m2: which index to put  i or j
      }
    }
    result.push (temp);
  }
  return result;
};
console.log (subsets ([1, 2]));
