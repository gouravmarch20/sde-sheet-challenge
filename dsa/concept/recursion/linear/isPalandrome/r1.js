const isPalindrome = number => {
  // Convert the number to a string
  const numberString = String(number)

  // Base case: if the string has 0 or 1 character, it's a palindrome
  if (numberString.length <= 1) {
    return true
  }

  if (numberString[0] === numberString[numberString.length - 1]) {
    return isPalindrome(numberString.slice(1, numberString.length - 1))
  } else {
    return false
  }
}

console.log(isPalindrome(12321))
