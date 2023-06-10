/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const cloneH = [...heights];
  cloneH.sort ((h1, h2) => h1 - h2);
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== cloneH[i]) {
      res++;
    }
  }
  return res;
};
