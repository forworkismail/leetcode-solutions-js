// unsorted array
const twoSumUnsortedArray = (arr, target) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let difference = target - arr[i];
    if (difference in map) {
      return [map[difference], i]
    } else {
      map[arr[i]] = i;
    }
  }
  return []
}

// sorted array
const twoSumSortedArray = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] > target) {
      right--;
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else {
      return [left, right]
    }
  }

  return [];
}