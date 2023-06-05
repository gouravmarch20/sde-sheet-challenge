
const powerOf = (n) => {
   if (n === 1) return 1
   return 2 * powerOf(n - 1)
}

console.log(powerOf(5))