var findMaxConsecutiveOnes = function (nums) {
  let countOfOne = 0;
  let result = 0;
  let foundOne = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      if (foundOne) {
        countOfOne++;
      } else {
        foundOne = true;
        countOfOne = 1;
      }
      result = Math.max(result, countOfOne);
    } else {
      foundOne = false;
      countOfOne = 0;
    }
  }

  return result;
};
