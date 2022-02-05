const reverseInteger = (num) => {

  let negative = num < 0;
  if (negative) num *= -1;

  let reversed = 0;
  while (num != 0) {
    reversed = (reversed * 10) + (num % 10);
    num = Math.floor(num / 10);
  }

  if (reversed > (2 ** 31 - 1) || reversed < -(2 ** 31)) return 0;

  return negative ? reversed *= -1 : reversed;
}