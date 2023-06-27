const num1 = 0;

console.log (~num1);
/**
  0 => 0000 0000 

  not => 1111 1111 

  //^ as MSB 1 means negative number 2's to read stored value

  1's -> 0000 0000
  +1  -> 0000 0000 +1 => 0000 0001 => 1 

  //^ 1 but MSB 1 so negative sign add in final  result
  //& -1
 */
