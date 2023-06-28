const nums1 = [1, 2, 3, 3, 3, 5];
const nums2 = [2, 3];
const linearS = (key, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (key === arr[i]) {
      return true;
    }
  }
  return false;
};
const intersection = (nums1, nums2) => {
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    if (linearS (nums1[i], nums2)) {
      //^ mark: to avoid to already included
      nums1[i] = -1;
      res.push (nums1[i]);
    }
  }
  return res;
};
console.log (intersection (nums1, nums2));
