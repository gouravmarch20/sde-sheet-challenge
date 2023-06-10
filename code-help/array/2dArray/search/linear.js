const arr = [
  ['John Doe', 20, 60, 'A'],
  ['Alice George', 28, 62, 'A'],
  ['Petr Chess', 5, 24, 'F'],
  ['Ling Jess', 28, 43, 'A'],
  ['Ben Liard', 16, 51, 'B']
]
const linearSearch = (row, col) => {
  const arr = []

  for (let i = 0; i <= row; i++) {
    arr[i] = [] // Initialize each row as an empty array
    for (let j = 0; j <= col; j++) {
      if ((arr[i][j] = 20)) {
        return true
      }
    }
  }
  return arr
}
console.log(linearSearch(4, 3, 20))
