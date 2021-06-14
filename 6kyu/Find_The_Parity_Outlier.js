const FindOutlierInt = (n) => {
  let odd = 0;
  let even = 0;

  n.forEach((el) => {
    if (el % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  });

  let oddInt;
  let evenInt;

  n.forEach((el) => {
    if (odd > even) {
      if (el % 2 === 0) {
        evenInt = el;
      }
    }
    if (even > odd) {
      if (el % 2 !== 0) {
        oddInt = el;
      }
    }
  });

  if (oddInt) {
    return oddInt;
  }

  return evenInt;
};

FindOutlierInt([2, 4, 0, 100, 4, 11, 2602, 36]);
