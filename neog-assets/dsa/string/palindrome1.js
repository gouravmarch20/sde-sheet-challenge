const str = 'abcdcba'
//*** avoid by making counter to much deep thingking
for (let i = 0; i < str.length / 2; i++) {
  if (!(str[i] == str[str.length - 1 - i])) {
    console.log('not a paladrom')
  }
}
