const isPrime = n => {
   for (let i = 2; i <= Math.floor(n/2); i++) {
     if (n % i === 0) {
       return false
     }
   }
   return true
 }
 var countPrimes = function (n) {
   let count = 0
   for (let i = 2; i < n; i++) {
     if (isPrime(i)) {
       count++
     }
   }
   return count
 }
 console.log(countPrimes(10))
 