var maxArea = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(area, result);

    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return result;
};