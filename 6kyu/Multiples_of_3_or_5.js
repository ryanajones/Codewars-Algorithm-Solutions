const sumOfMultiples = (num) => {
  if (num < 0) {
    return 0;
  }

  const oneToNum = [];
  for (let i = 1; i < num; i++) {
    oneToNum.push(i);
  }

  const multiplesOfThreeAndFive = [];
  oneToNum.forEach((el) => {
    if (el % 3 === 0 || el % 5 === 0) {
      multiplesOfThreeAndFive.push(el);
    }
  });

  if (multiplesOfThreeAndFive.length === 0) {
    return 0;
  }
  return multiplesOfThreeAndFive.reduce((a, b) => a + b);
};

sumOfMultiples(10);
