const longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].lastIndexOf(prefix) !== 0) {

      if (strs[i].length > prefix.length) {
        strs[i] = strs[i].substr(0, strs[i].length - 1);
      } else {
        prefix = prefix.substr(0, prefix.length - 1);
      }

      if (prefix.length === 0) {
        return "";
      }
    }
  }

  return prefix;
};