const num = [2, 7, 11, 15]
const target = 26
const twoSum = () => {
  const obj = {}
  for (let i = 0; i < num.length; i++) {
    const n = num[i]
    if (obj[target - n]) {
      return [obj[target - n], i]
    }
    obj[n] = i
  }
}
console.log(twoSum(num, target))
