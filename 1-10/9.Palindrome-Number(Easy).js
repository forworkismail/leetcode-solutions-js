var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  return x === reversedInteger(x);
};

const reversedInteger = (num) => {
  let rev = 0;

  while (num > 0) {
    rev = (rev * 10) + (num % 10);
    num = Math.floor(num / 10);
  }

  return rev;
}