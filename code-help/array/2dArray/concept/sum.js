let MathScore = [
  ['John Doe', 20, 60, 'A'],
  ['Jane Doe', 10, 52, 'B'],
  ['Petr Chess', 5, 24, 'F'],
  ['Ling Jess', 28, 43, 'A'],
  ['Ben Liard', 16, 51, 'B']
]
const eachStudentMark = []
MathScore.forEach(score => {
  let totalScore = score[1] + score[2]
  eachStudentMark.push(totalScore)
})

console.log(eachStudentMark)
