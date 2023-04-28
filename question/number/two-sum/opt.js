const num = [2, 7, 11, 15]
const target = 26
const twoSum = () => {
  const obj = {}
  for (let i = 0; i < num.length; i++) {
    if (obj.hasOwnProperty(num[i])) {
      return [i, obj[num[i]]]
    }
    obj[target - num[i]] = i
  }

 
}
console.log(twoSum(num, target))
