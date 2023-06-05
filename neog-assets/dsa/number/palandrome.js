// 0 , 1 , 1 , 2 , 3 , 5
let printForNext = 10
// ? m1 -> used += operator --> not dry run / approch issue
let sum = 0
let num1 = 0
let num2 = 1
for (let i = 0; i < printForNext; i++) {
  sum = num1 + num2

  num1 = num2
  num2 = sum
  console.log(sum);
}
