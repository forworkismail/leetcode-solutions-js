const romanToInt = function (s) {
  let result = 0;
  let currentNum = 0;
  const romanNum = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  for (let i = s.length - 1; i >= 0; i--) {
    if (currentNum > romanNum[s[i]]) {
      result -= romanNum[s[i]];
    } else {
      result += romanNum[s[i]];
    }
    currentNum = romanNum[s[i]];
  }

  return result;
};