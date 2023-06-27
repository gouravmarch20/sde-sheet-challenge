const coin = m => {
  let coin50 = 0
  let coin20 = 0
  let coin5 = 0
  coin100 = Math.floor(m / 100)
  m = m % 100
  // 
  console.log(m)
  // 
  coin50 = Math.floor(m / 100)
  m = m % 100
  console.log(m)
  // 
  coin20 = Math.floor(m / 20)
  m = m % 20
  console.log(m)
  // 
  coin5 = Math.floor(m / 1)
  console.log(coin100, coin50, coin20, coin5)
}

coin(1330)
