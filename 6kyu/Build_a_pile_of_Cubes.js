const find = (m) => {
  let total = 0;
  let n = -1;
  for (let i = 1; total <= m; i++) {
    total += i ** 3;
    if (total === m) {
      n = i;
    }
  }
  return n;
};

find(1071225);
