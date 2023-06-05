function countPrimes(n) {
   if (n <= 1) {
     return 0;
   }
 
   const sqrtN = Math.floor(Math.sqrt(n));
   const segmentSize = Math.max(sqrtN, 2);
   const primes = [];
   const isPrime = new Array(segmentSize).fill(true);
 
   // Generate primes up to sqrt(n) using regular sieve of Eratosthenes
   for (let i = 2; i <= sqrtN; i++) {
     if (isPrime[i]) {
       primes.push(i);
       for (let j = i * i; j <= sqrtN; j += i) {
         isPrime[j] = false;
       }
     }
   }
 
   let count = primes.length;
   let low = segmentSize;
   let high = segmentSize * 2;
 
   while (low < n) {
     if (high >= n) {
       high = n;
     }
 
     const segmentPrimes = new Array(high - low).fill(true);
 
     for (let i = 0; i < primes.length; i++) {
       const p = primes[i];
       let start = Math.floor(low / p) * p;
       if (start < low) {
         start += p;
       }
 
       for (let j = start; j < high; j += p) {
         segmentPrimes[j - low] = false;
       }
     }
 
     count += segmentPrimes.filter(prime => prime).length;
 
     low += segmentSize;
     high += segmentSize;
   }
 
   return count;
 }
 