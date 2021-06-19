const bitCounting = (n) => {
  let binary = 0;
  n.toString(2)
    .split('')
    .forEach((el) => {
      if (el === '1') binary += 1;
    });

  return binary;
};

bitCounting(1234);
