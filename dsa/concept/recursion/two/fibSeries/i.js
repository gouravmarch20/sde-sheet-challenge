const fib = no => {
  const result = []
  for (let i = 0; i <= no; i++) {
    if (i <= 1) {
      result.push(i)
    } else {
      result.push(result[i - 1] + result[i - 2])
    }
  }
  return result[no]
}
console.log(fib(5))
