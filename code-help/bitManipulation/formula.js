// left shift : num * (2 ^ shift )
// right shift : num /  (2 ^ shift )

// 10 << 3 --> 10 * 2 * 3 => 60 
console.log(10 << 0); // 10 * 2^0 => 10
console.log(10 << 1); // 10 * 2^1 => 20
console.log(10 << 2); // 10 * 2^2 => 40
console.log(10 << 3); //? 10 * 2^3 => 10 * 8 => 80

//^ 
console.log(10 >> 3); // Math.floor(10 / 2^3) => 1
console.log(100 >> 3); // Math.floor(100 / 2^3) => 100 / 8 =>12
