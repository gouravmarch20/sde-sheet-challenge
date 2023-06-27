/**
 //^ 10 * ans + digit 

 //& 4567 -> 
 // 10 * 0 + 4 => 4 
 // 10 * 4 + 5 => 40 + 5 => 45 
 // 10 * 45 + 6 => 450 + 6 => 456 
 // 10 * 456 + 7 => 4560 + 7 => 4567 
 */

const readNo = noArr => {
  let ans = 0;

  for (let i = 0; i < noArr.length; i++) {
    ans = 10 * ans + noArr[i];
  }
  console.log (ans);
};
eadNo ([2, 4, 8, 4]);
