const sumOfMultiples = (num) => {
  // Return 0 if numnber is negative
  if (num < 0) {
    return 0;
  }

  // Make an array from 1 to num
  const oneToNum = [];

  for (let i = 1; i < num; i++) {
    oneToNum.push(i);
  }

  // Make an array of all the multiples of 3 and 5 within oneToNum array
  const multiplesOfThreeAndFive = [];

  oneToNum.forEach((el) => {
    if (el % 3 === 0 || el % 5 === 0) {
      multiplesOfThreeAndFive.push(el);
    }
  });

  if (multiplesOfThreeAndFive.length === 0) {
    return 0;
  }
  console.log(multiplesOfThreeAndFive);
  // Return sum of multiplesOfThreeAndFive array
  return multiplesOfThreeAndFive.reduce((a, b) => a + b);
};

sumOfMultiples(10);
