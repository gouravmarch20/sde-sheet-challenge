const altSwap = arr => {
  const limitIteration = arr.length % 2 === 0? arr.length : arr.length - 1
  for (let i = 0; i < limitIteration; i += 2) {
    ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
  return arr
}

console.log(altSwap([1, 2, 3]))
