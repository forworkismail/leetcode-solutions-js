const removeDuplicates = function (nums) {
  let i = 0;
  let k = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i++;
      k++;
    }
  }
  return k;
};