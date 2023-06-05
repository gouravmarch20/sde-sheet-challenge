const a = 4
const b = 6
// 2^0 => 1 , 2^1 => 2 , 2^2 => 4, 2^3 => 6, 2^4 => 8
console.log(a & b) // 0100 & 0110 => 0100
console.log(a | b) // 0100 | 0110 => 0110
console.log(~a)
console.log(a ^ b) // 0100 ^ 0110 => 0010 => 2
/**
  - 4 => 0000 0000 0000 0100
  Not of 4 > 1111_1111___1011 //**  first sign  1 means negative number

   -> 1's complement ==> 1 ka 0 , 0 ka 1 ==> 0000---0100
   -> 2's complement => +1 add ==> ----0101 hence -5 
 */
