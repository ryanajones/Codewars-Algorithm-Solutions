const digitalRoot = (n) => {
  let num = n;
  while (num.toString().length > 1) {
    num = Array.from(num.toString())
      .map(Number)
      .reduce((a, b) => a + b);
  }

  return num;
};

digitalRoot(952);
