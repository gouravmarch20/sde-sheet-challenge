let amount = 1330

let coins100 = 0
let coins50 = 0
let coins20 = 0
let coins1 = 0

while (amount > 0) {
  switch (true) {
    case amount >= 100:
      coins100 = Math.floor(amount / 100)
      amount = amount % 100
      break

    case amount >= 50:
      coins50 = Math.floor(amount / 50)
      amount = amount % 50
      break

    case amount >= 20:
      coins20 = Math.floor(amount / 20)
      amount = amount % 20
      break
    case amount >= 1:
      coins1 = Math.floor(amount / 1)
      amount = amount % 1
      break

    default:
      break
  }
}

console.log('Coins of 100:', coins100)
console.log('Coins of 50:', coins50)
console.log('Coins of 20:', coins20)
console.log('Coins of 1:', coins1)
