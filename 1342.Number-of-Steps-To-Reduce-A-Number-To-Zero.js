var numberOfSteps = function(num) {
  if (num >= 0 && num <= Math.pow(10, 6)) {
      let step = 0;
      while (num != 0) {
          if (num % 2 === 0) {
              num /= 2;
          } else {
              num -= 1;
          }
          step++;
      }
      return step;
  }
    return null;
};
