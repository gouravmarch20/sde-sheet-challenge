
const powerOf = (no, power) => {
   // base
   if (power === 0) {
      return 1
   }
   if (power === 1) {
      return no;
   }
   // call
   let ans = powerOf(no, Math.floor(power / 2))
   //even odd logic
   if (power % 2 === 0) {
      const tempOdd = ans * ans
      return ans * ans
   } else {
      const tempEve = no * ans * ans
      return no * ans * ans
   }

}
console.log(powerOf(2, 10));