console.log (~3);
/**
      //~ 0011
     step1>  not operator apply  : 1111 1100
     step2> left most is 1 so it's negative no need 2's
     step3> 2's 
      //^ a> 1's :: not operation again ->  0000 0011 
      //^ b> 2's ::  add 1 ->  0000 0011 + 1 -> 0000 0100
     step3 > add negative sign



*/
console.log ('two not ', ~2);
/**
      //~ 0010
     step1>  not operator apply  : 1111 1101
     step2> left most is 1 so it's negative no need 2's

     step2> 2's 
       a> 1's ->  0000 0010
       b> 2's ->  0010 + 1 -> 0011 -> 3
     step3 > add negative sign
*/
console.log ('negative 3 ', ~-3);
/**
   step1 >> -3 binary find 
      a)get +ve in binary >>  3 : 011 
      b) 2's 
         1) 1's : 0000 0011 --> 1111 1100
         1) 2's : 0000 0011 --> 1111 1101
    //^ hence it store as 1111 1101
   step2 >   1111 1101 --> 0000 0010 -> 2

*/

console.log ('negative 5 ', ~-5);
/**
   step1 >> binary find
      a)  5 : 101 
      b) 2's 
         1) 1's : 0000 0101 ---> 1111 1010
         1) 2's :  1111 1101 --> 1111 1011
    //^ hence it store as 1111 1101
   step2 >   1111 1011 --> 0000 0100 -> 4

*/
