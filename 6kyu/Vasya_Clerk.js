const enoughChange = (peopleInLine) => {
  let twentyFive = 0;
  let fifty = 0;
  let bool = 'YES';
  peopleInLine.forEach((el) => {
    if (el === 25) {
      twentyFive += 1;
    }
    if (el === 50) {
      if (twentyFive >= 1) {
        twentyFive -= 1;
        fifty += 1;
      } else {
        bool = 'NO';
      }
    }
    if (el === 100) {
      if (fifty >= 1 && twentyFive >= 1) {
        fifty -= 1;
        twentyFive -= 1;
      } else if (twentyFive >= 3) {
        twentyFive -= 3;
      } else {
        bool = 'NO';
      }
    }
  });
  return bool;
};

enoughChange([25, 25, 50, 50, 100]);
