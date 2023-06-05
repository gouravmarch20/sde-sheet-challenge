//? auto add 1 at left most bit 
//m1>> //* or operator not work in bit operation , | or bit wise operator work
let mask = 1;
mask = (mask << 1 | 1);//? left sift what 0 looking for chancing found 1
console.log(mask);
//
mask = (mask << 1 | 1);
console.log(mask);
// 
mask = (mask << 1 | 1);
console.log(mask);
