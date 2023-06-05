var fib = function (n) {
   let arr = []
   for (let i = 0; i <= n; i++) {
      const element = arr[i]
      if (i < 2) {
         arr.push(i)
      } else {
         arr[i] = arr[i - 1] + arr[i - 2]
      }

   }
   return arr
};
console.log(fib(6));