const subSet = str => {
  let ans = [];
  const n = str.length;
  for (let i = 0; i < 1 << n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      //
      const temp1 = 1 << j;
      const temp2 = i;
      const tem2 = (1 << j) & i;
      console.log (1 << j);
      if ((1 << j) & i) {
        //
        arr.push (str[j]);
      }
    }
    //  console.log (arr);
    ans.push (arr);
  }
  return ans;
};

subSet ([1, 2, 3]);
// console.log (subSet ([1, 2, 3]));
