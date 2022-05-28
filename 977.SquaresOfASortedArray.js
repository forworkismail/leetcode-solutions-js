var sortedSquares = function (A) {
  let result = [];
  let left = 0;
  let right = A.length - 1;
  let position = right;

  while (left <= right) {
    if (A[left] ** 2 > A[right] ** 2) {
      result[position--] = A[left++] ** 2;
    } else {
      result[position--] = A[right--] ** 2;
    }
  }

  return result;
};

let nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
