const result = (n, i, s) => {
   if (i === 0) {
     console.log ('ll', s);
     return;
   }
   s += i;
   i--;
 
   result (n, i, s);
 };
 console.log (result (3, 3, 0));
 