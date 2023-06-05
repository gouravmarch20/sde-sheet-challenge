const isPalindrome = number => {
  // Convert the number to a string
  const numberString = String(number)

  // Base case: if the string has 0 or 1 character, it's a palindrome
  if (numberString.length <= 1) {
    return true
  }
  console.log(number)
  // Recursive case: check if the first and last characters are equal
  if (numberString[0] === numberString[numberString.length - 1]) {
    // Remove the first and last characters
    const newNumber = numberString.slice(1, -1)

    // Recursively check the remaining substring
    return isPalindrome(newNumber)
  } else {
    return false
  }
}

console.log(isPalindrome(12321))
