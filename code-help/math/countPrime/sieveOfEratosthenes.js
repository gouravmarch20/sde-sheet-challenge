// time complexity => log(log n)
/**
   - n/2 + n/3 + n/5 + n/7 + .... ==> n (1/2 + 1/3 + 1/5 + 1/7) => Harmonic progression

 */
function countPrimes (n) {
  let cnt = 0
  let prime = new Array(n + 1).fill(true)
  prime[0] = prime[1] = false
  for (let i = 2; i <= n; i++) {
    if (prime[i]) {
      cnt++
      for (let j = 2 * i; j <= n; j += i) {
        prime[j] = false
      }
    }
  }
}
