const makeLowerCase = char => {
   const reqCharAsciiUpperCase =
     char.charCodeAt(0) - 'A'.charCodeAt(0) + 'a'.charCodeAt(0)
   return String.fromCharCode(reqCharAsciiUpperCase)
 }
 console.log(makeLowerCase('D'))
 