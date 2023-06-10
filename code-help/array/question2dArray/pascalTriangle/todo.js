//https://www.youtube.com/watch?v=bR7mQgwQ_o8
var generate = numRows => {

  let res = [];
  for (let i = 0; i < numRows; i++) {
    let temp = new Array (i + 1).fill (1);
    // console.log(temp);
    for (let j = 1; j < i; j++) {
      temp[j] = res[i - 1][j - 1] + res[i - 1][j];
    }
    res.push (temp);
  }
  return res;
};
console.log (generate (5));
