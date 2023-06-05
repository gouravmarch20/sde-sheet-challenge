// m1  > l = m  , r = m ===> making infinite loop because m , l or m,r keep repeating same
// m2 >> constant value ko place first ==> easy to visualize ==> target < arr[m]
// m3 >> both index can be equal 
const binarySearch = (arr, target) => {
  let l = 0
  let r = arr.length - 1
  //   let m = Math.floor(arr.length / 2)
  while (l <= r) {
    m = Math.floor((l + r) / 2)
    // m = Math.floor(l + (l+r) / 2)
    if (arr[m] === target) {
      return m
    } else if ( target > arr[m]) {
      l = m + 1
    } else if ( target < arr[m] ) {
      r = m - 1
    }
  }
  return -1
}

console.log(binarySearch([3, 5, 9, 19, 44], 44))
