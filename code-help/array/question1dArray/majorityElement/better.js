//* TIME : O(n)
//~ SPACE : O(n)
const nums = [1, 2];
const majorityElement = nums => {
  const minRep = Math.floor (nums.length / 3); //~ O(1)
  const res = []; //~ O(N)
  let myMap = new Map (); //~ O(N)
  //* O(n)
  for (const val of nums) {
    if (myMap.has (val)) {
      myMap.set (val, myMap.get (val) + 1);
    } else {
      myMap.set (val, 1);
    }
  }
  //* O(n)
  for ([key, val] of myMap) {
    if (val > minRep) {
      res.push (key);
    }
  }
  return res;
};
console.log (majorityElement (nums));
