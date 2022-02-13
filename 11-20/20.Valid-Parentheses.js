const isValid = function (s) {

  if (s.length === 0 || s.length % 2 != 0) return false;

  let parenthesisMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (parenthesisMap[s[i]]) {
      arr.push(s[i]);
    } else if (s[i] != parenthesisMap[arr.pop()]) {
      return false;
    }
  }
  return arr.length === 0;
};