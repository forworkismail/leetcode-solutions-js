var romanToInt = function(s) {
  let map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  
  let prev = 0;
  let result = 0;
  
  for (let i = s.length - 1; i >= 0; i--) {
      let value = map[s[i]];
      if (prev > value) {
          result -= value;
      } else {
          result += value;
      }
      prev = value;
  }
  
  return result;
};