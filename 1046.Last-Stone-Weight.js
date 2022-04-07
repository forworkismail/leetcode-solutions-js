const lastStoneWeight = s =>
  1 === s.length
    ? s[0]
    : lastStoneWeight(s.sort((a, b) => a - b).concat(s.pop() - s.pop()));