/**
 * @param {number[]} nums
 * @return {number}
 */
const isEven = no => {
  let c = 0;
  while (no) {
    no = Math.floor (no / 10);
    c++;
  }

  return c % 2 === 0;
};
var findNumbers = function (nums) {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (isEven (nums[i])) {
      c++;
    }
    //   if(  String(nums[i]).length % 2 === 0){
    //       c++
    //   }
  }
  return c;
};
// console.log (findNumbers ([555, 901, 482, 1771]));
console.log (findNumbers ([555]));
