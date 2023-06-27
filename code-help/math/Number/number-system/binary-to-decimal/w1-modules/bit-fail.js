//! failed because computer ==> string ko store in its own bit  --- --- -- 
const binaryToDecimal = num => {
  let ans = 0
  let n = 0
  while (num !== 0) {
    const bit = num & 1
   if (bit === 1) {
      console.log(bit)

      ans += bit * 1
      console.log(ans);
    }

    n++
    num >>= 1
  }
  return ans
}
console.log(binaryToDecimal('0101'))
//  console.log(binaryToDecimal('4'))
