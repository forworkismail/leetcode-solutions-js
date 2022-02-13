const strStr = function (haystack, needle) {
  if (haystack.length === 0 && needle.length === 0) return 0;
  if (haystack.length === 0) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, needle.length + i) === needle) {
      return i;
    }
  }

  return -1;
};