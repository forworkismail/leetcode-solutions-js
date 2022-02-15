const trap = function (height) {
  let total = 0;
  let maxRight = 0;
  let maxLeft = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        total += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        total += maxRight - height[right];
      }
      right--;
    }
  }
  return total;
};