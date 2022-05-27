const findNumbers = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > Math.pow(10, 1) - 1 && nums[i] < Math.pow(10, 2)) {
      result++;
    } else if (nums[i] > Math.pow(10, 3) - 1 && nums[i] < Math.pow(10, 4)) {
      result++;
    } else if (nums[i] == Math.pow(10, 5)) {
      result++;
    }
  }

  return result;
};

// using to string and reduce
const findNumbersUsingReduce = (nums) =>
  nums.reduce(
    (evenDigits, num) => (String(num).length % 2 ? evenDigits : evenDigits + 1),
    0
  );
