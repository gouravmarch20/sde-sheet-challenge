const rangeOfNumber = (start, end) => {
  if (end < start) {
    return []
  } else {
    const numbers = rangeOfNumber(start, end - 1)
    numbers.push(end)
    return numbers
  }
}
console.log(rangeOfNumber(1, 5))
