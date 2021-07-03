const pow = (n, p) => {
  const arr = Array.from(String(n), (x) => Number(x));
  let acc = 0;
  let exponent = p;

  arr.forEach((el) => {
    acc += el ** exponent;
    exponent++;
  });

  const k = Math.round(acc / n);

  if (acc === n * k) {
    return k;
  }

  return -1;
};

pow(46288, 3);
